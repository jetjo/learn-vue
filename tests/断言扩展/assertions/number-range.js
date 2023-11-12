export function toBeWithinRange(received, floor, ceiling) {
	const { isNot } = this;
	const pass = received >= floor && received <= ceiling;
	return {
		message: () =>
			`${received} ${isNot ? 'not' : ''} within range ${floor} - ${ceiling}`,
		pass,
	};
}