import { test, expect as expectGlobal } from "vitest";

test('numeric ranges', ({ expect }) => {
	expect(100).toBeWithinRange(90, 110);
	expect(101).not.toBeWithinRange(0, 100);
	expect({ apples: 6, bananas: 3 }).toEqual({
		apples: expectGlobal.toBeWithinRange(1, 10),
		bananas: expectGlobal.not.toBeWithinRange(11, 20),
	});
	// NOTE: TypeError: expect.toBeWithinRange is not a function
	// const applesMatcher = expect.toBeWithinRange(1, 10);
	const applesMatcher = expectGlobal.toBeWithinRange(1, 10);
	const bananasMatcher = expectGlobal.not.toBeWithinRange(11, 20);
	console.log({ applesMatcher, bananasMatcher });
	expect({ apples: 6, bananas: 3 }).toEqual({
		apples: applesMatcher,
		bananas: bananasMatcher,
	});
	// expect({ apples: 6, bananas: 3 }).toEqual({
	// 	applesMatcher,
	// 	bananasMatcher,
	// });
});