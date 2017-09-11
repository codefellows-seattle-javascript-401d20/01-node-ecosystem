'use strict';

const arithmetic = require('../lib/arithmetic.js');

test('arithmetic.add(10, 10) should return 20', () => {
  let result = arithmetic.add(10, 10);
  expect(result).toEqual(20);
});

test('arithmetic.sub(10, 10) should return 0', () => {
  let result = arithmetic.sub(10, 10);
  expect(result).toEqual(0);
});

test('arithmetic.add(\'test\', 10) should return null', () => {
  let result = arithmetic.add('test', 10);
  expect(result).toEqual(null);
});

test('arithmetic.sub(\'test\', 10) should return null', () => {
  let result = arithmetic.add('test', 10);
  expect(result).toEqual(null);
});
