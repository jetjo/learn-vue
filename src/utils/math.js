// src/index.ts

// 函数实现
/**@param {number[]} args */
export function add(...args) {
  return args.reduce((a, b) => a + b, 0)
}

// 源码内的测试套件
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}