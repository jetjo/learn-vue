// fix error:
// ReferenceError: Response is not defined
//  ❯ node_modules/.pnpm/msw@2.0.5_typescript@5.2.2/node_modules/msw/lib/core/HttpResponse.mjs:5:28
import 'cross-fetch/polyfill';
import { setupServer } from "msw/node";
import { postsHandlers } from "../handlers/posts";
import { userHandlers } from "../handlers/user";

// console.warn('确认.......');
export const nodeServer = setupServer(...postsHandlers, ...userHandlers);

nodeServer.events.on('request:start', ({ request }) => {
    console.log('MSW intercepted: ', request.method, request.url);
})