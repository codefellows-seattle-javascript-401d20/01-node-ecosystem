'use strict'

const greet = require('../lib/greet.js')

test('greet(10) should return null', () => {
  let result = greet();
  expect(result).toEqual(null);
});

test('greet(\'world\') should return "hello world"', () => {
  let result = greet('world');
  expect(result).toEqual('hello world');
});
