const greet = require('../lib/greet');

test('greet() should return null', () => {
	let result = greet()
	expect(result).toEqual(null)
})

test('greet(\"world\") should return “hello world”', () => {
	let result = greet('world')
	expect(result).toEqual('hello world')
})

test('greet(5) should return “hello world”', () => {
	let result = greet(5)
	expect(result).toEqual(null)
})
