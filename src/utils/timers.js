

export function executeAfterTwoHours(func) {
  setTimeout(func, 1000 * 60 * 60 * 2) // 2 hours
}
export function executeAfter200ms(func) {
  setTimeout(func, 200) // 2 hours
}

export function executeEveryMinute(func) {
  return setInterval(func, 1000 * 60) // 1 minute
}
