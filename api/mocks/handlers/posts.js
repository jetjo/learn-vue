import { http, HttpResponse } from "msw";
import { getBaseURL } from "../helpers";

export const postsPath = `${getBaseURL()}/posts`;

console.warn('postsPath: ', postsPath);

export const posts = [
	{
		userId: 1,
		id: 1,
		title: 'first post title',
		body: 'first post body',
	},
	// ...
]

/** @param {{id: number, isDel: boolean}} post 文章 */
function isValidPost(post) {
	return post && post.id && !post.isDel;// && post.title && post.body;
}

function getPost(id) {
	return posts.find((post) => post.id === Number(id));
}

// 经测试,确认,不会拦截到${postsPath}/:id
const _query = http.get(postsPath, ({ request }) => {
	console.warn('_query 拦截:', request.url);
	const { searchParams } = new URL(request.url);
	const ids = searchParams.getAll("id"); //例如: path?id=1&id=2, ids=[1,2]
	const queryStr = searchParams.get('q');
	const ps = queryStr ? posts.filter((p) => p.body.includes(queryStr.toLowerCase())) : posts;
	return HttpResponse.json(ps);
})

// 经确认,不能拦截${postsPath}
// [MSW] Warning: intercepted a request without a matching request handler:
// • GET /posts
const _get = http.get(`${postsPath}/:id`, ({ params, request }) => {
	console.warn('_get 拦截: ', request.url);
	const { id } = params;
	if (!Number(id)) return HttpResponse.json(posts);
	const post = getPost(id);
	if (isValidPost(post)) {
		return HttpResponse.json(post);
	}
	return new HttpResponse(null, { status: 404 })
});

const _post = http.post(postsPath, async ({ request }) => {
	const post = await request.json();
	post.id = posts.length + 1;
	posts.push(post);
	return HttpResponse.json(post, { status: 201 });
})

const _delete = http.delete(`${postsPath}/:id`, ({ params }) => {
	const { id } = params;
	// NOTE: error方法用于响应底层网络错误, 不是用来响应业务错误的
	// if (!Number(id)) return HttpResponse.error("id is not a number");
	const post = getPost(id);
	if (isValidPost(post)) {
		post.isDel = true;
		return HttpResponse.json(post);
	}
	return new HttpResponse(null, { status: 404 })
});

// export const postsHandlers = [_get, _post, _delete]
// export const postsHandlers = [_query, _post, _delete]
//顺序无关,假如要拦截的url不重叠的话
// export const postsHandlers = [_query, _get, _post, _delete]
export const postsHandlers = [_get, _query, _post, _delete]