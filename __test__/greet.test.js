'use strict';

const greet = require('../lib/greet.js');

test('greet() should return null', () => {
  let result = greet();
  expect(result).toEqual(null);
});

test('greet(3) should return null', () => {
  let result = greet(3);
  expect(result).toEqual(null);
});

test('greet(\'world\') should return "hello world"', () => {
  let result = greet('world');
  expect(result).toEqual('hello world');
});
