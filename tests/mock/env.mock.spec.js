import { beforeEach, expect, it } from 'vitest'

// you can reset it in beforeEach hook manually
const originalViteEnv = import.meta.env.VITE_ENV
// before running tests "VITE_ENV" is 'test'
// import.meta.env.VITE_ENV = 'test'

beforeEach(() => {
	// 要更改环境变量，你只需为其分配一个新值即可。
	// 该值将不会在不同的测试之间自动重置。
	import.meta.env.VITE_ENV = originalViteEnv
})

it('changes value', () => {
	// import.meta.env.VITE_ENV = 'staging'
	// expect(import.meta.env.VITE_ENV).toBe('staging')
})

it('changes value', () => {
	vi.stubEnv('VITE_ENV', 'staging')
	expect(import.meta.env.VITE_ENV).toBe('staging')
})

it('the value is restored before running an other test', () => {
	expect(import.meta.env.VITE_ENV).toBe(originalViteEnv + '')
})
