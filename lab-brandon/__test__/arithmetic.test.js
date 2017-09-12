'use strict'
const arithmetic = require('../lib/arithmetic');

test('add() should return null', () => {
	let result = arithmetic.add()
	expect(result).toEqual(null)
})

test('sub() should return null', () => {
	let result = arithmetic.sub()
	expect(result).toEqual(null)
})

test('add(\"aayy\") should return null', () => {
	let result = arithmetic.add("aayy")
	expect(result).toEqual(null)
})

test('sub(\"aayy\") should return null', () => {
	let result = arithmetic.sub("aayy")
	expect(result).toEqual(null)
})

test('add(5,5) should return 10', () => {
	let result = arithmetic.add(5,5)
	expect(result).toEqual(10)
})

test('sub(5,1) should return 4', () => {
	let result = arithmetic.sub(5,1)
	expect(result).toEqual(4)
})
