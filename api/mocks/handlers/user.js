import { http, HttpResponse } from "msw";

const handlers = [
	http.get('/user', ({ cookies }) => {
		const { session } = cookies

		if (!session) {
			return new HttpResponse(null, { status: 401 })
		}
	})
]

export { handlers as userHandlers }