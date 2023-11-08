import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Client } from 'pg'
// ReferenceError: Cannot access 'PGMock' before initialization
// import * as PGMock from '../../../__mocks__/pg'
// ReferenceError: Cannot access 'PGDefaultMock' before initialization
// import PGDefaultMock from '../../../__mocks__/pg'
import { failure, success } from '../../../src/utils/handlers'
import { getTodos } from "../../../src/sql-get-todos";

const { Client: ClientMock } = await vi.hoisted(async () => {
	const PGMock = await import('../../../__mocks__/pg')
	// console.log('PGMock', PGMock);
	return {
		// default: PGDefaultMock,
		...PGMock
	}
})

// console.log('ClientMock.prototype', ClientMock.prototype);

vi.mock('pg', async () => {
	return {
		Client: ClientMock
	}
})

vi.mock('../../../src/utils/handlers')

describe('get a list of todo items', () => {
	let client;
	beforeEach(() => {
		client = new Client()
	})

	afterEach(() => {
		vi.clearAllMocks();
	})


	// TypeError: Cannot read properties of undefined (reading 'query')
	// client.query.mockResolveValueOnce({ rows: [], rowCount: 0 });

	it('should return items successfully', async () => {
		// 其后的Client实例的行为也会改变!!!???
		client.query.mockResolvedValueOnce({ rows: [], rowCount: 0 });

		await getTodos();

		expect(client.connect).toHaveBeenCalledTimes(1);
		expect(client.query).toBeCalledWith('SELECT * FROM todos;')
		expect(client.end).toBeCalledTimes(1)

		expect(success).toBeCalledWith({
			message: '0 item(s) returned',
			data: [],
			status: true,
		})
	})

	it('should throw an error', async () => {
		const mError = new Error('Unable to retrieve rows')
		client.query.mockRejectedValueOnce(mError)

		await getTodos()

		expect(client.connect).toBeCalledTimes(1)
		expect(client.query).toBeCalledWith('SELECT * FROM todos;')
		expect(client.end).toBeCalledTimes(1)
		expect(failure).toBeCalledWith({ message: mError, status: false })
	})
})