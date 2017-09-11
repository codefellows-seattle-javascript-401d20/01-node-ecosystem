'use strict';

const greet = require('../lib/greet.js');

// Empty
test('greet() should return null', () => {
  let result = greet();
  expect(result).toEqual(null);
});

// Non-String
test('greet(1) should return null', () => {
  let result = greet(1);
  expect(result).toEqual(null);
});

test('greet(true) should retun null', () => {
  let result = greet(true);
  expect(result).toEqual(null);
});

// Valid string
test('greet(\'world\') should return "hello world"', () => {
  let result = greet('world');
  expect(result).toEqual('hello world');
});
