import { expect, it } from 'vitest'

it('toUpperCase', () => {
  const result = toUpperCase('foobar')
	// 行内快照,调用时不用传参,初次运行后,自动将result转为字符串并作为参数
  // expect(result).toMatchInlineSnapshot()
  expect(result).toMatchInlineSnapshot('"FOOBAR"')
})

function toUpperCase(params) {
	// params.toUpperCase()
	// return String(params).toUpperCase()
	return String.prototype.toUpperCase.call(params)
}