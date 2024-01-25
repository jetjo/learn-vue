import { it, expect } from "vitest";

it('import.meta.env.NODE_ENV', () => {
	expect(import.meta.env.NODE_ENV).toBe('test')
})
it('import.meta.env.VITE_ENV', () => {
	console.warn(import.meta.env.VITE_ENV, 'import.meta.env.VITE_ENV');
	expect(import.meta.env.VITE_ENV).toBe(undefined)
})