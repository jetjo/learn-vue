import express from "express";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import App from './app.js'

const server = express();

server.get('/', (req, res) => {
	const app = createSSRApp(App);

	renderToString(app).then(htm => {
		res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>Vue SSR Examples</title>
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