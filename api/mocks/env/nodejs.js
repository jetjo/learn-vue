import { setupServer } from "msw/node";
import { postsHandlers } from "../handlers/posts";
import { userHandlers } from "../handlers/user";

// console.warn('确认.......');
export const nodeServer = setupServer(...postsHandlers, ...userHandlers);

nodeServer.events.on('request:start', ({ request }) => {
    console.log('MSW intercepted: ', request.method, request.url);
})