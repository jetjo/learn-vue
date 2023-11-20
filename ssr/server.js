import express from "express";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import App from './app.js'

const server = express();

server.use(express.static('.'))

server.get('/', (req, res) => {
	const app = createSSRApp(App);

	renderToString(app).then(htm => {
		res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>Vue SSR Examples</title>
				<!-- External import maps are not yet supported. -->
				<!-- <script type="importmap" src="./importmap.json"></script> -->
				<script type="importmap">
				{
					"imports": {
						"vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
					}
				}
				</script>
				<script type="module" src="./client.js"></script>
			</head>
			<body>
				<div id="app">${htm}</div>
			</body>
		</html>
		`)
	})
})

server.listen(3333, (...args) => {
	console.log({ args });
})