'use strict';

const greet = require('../lib/greet.js');

test('greet() should return null', () => {
  let result = greet();
  expect(result).toEqual(null);
});

test('greet(6) should return null', () => {
  let result = greet(6);
  expect(result).toEqual(null);
});

test('greet(\'ron\') should return "hello ron"', () => {
  let result = greet('ron');
  expect(result).toEqual('hello ron');
});

