const get = (url) => {
	return new Promise((resolve, reject) => {
		if (url === '/api/todos') {
			resolve({
				data: [
					{ id: 1, text: 'todo1', done: false },
					{ id: 2, text: 'todo2', done: true },
				]
			})
		} else {
			reject(new Error('404'))
		}
	})
}

export default get;