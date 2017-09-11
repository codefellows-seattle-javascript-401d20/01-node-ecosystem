'use strict';

const arithmetic = require('../lib/arithmetic.js');

// arithmetic.add()
test('arithmetic.add(5, 3) should return 8', () => {
  let result = arithmetic.add(5, 3);
  expect(result).toEqual(8);
});

test('arithmetic.add(5, "3") should return null', () => {
  let result = arithmetic.add(5, '3');
  expect(result).toEqual(null);
});

test('arithmetic.add("5", 3) should return null', () => {
  let result = arithmetic.add('5', 3);
  expect(result).toEqual(null);
});

// arithmetic.sub()
test('arithmetic.sub(5, 3) should return 2', () => {
  let result = arithmetic.sub(5, 3);
  expect(result).toEqual(2);
});

test('arithmetic.sub(5, "3") should return null', () => {
  let result = arithmetic.sub(5, '3');
  expect(result).toEqual(null);
});

test('arithmetic.sub("5", 3) should return null', () => {
  let result = arithmetic.sub('5', 3);
  expect(result).toEqual(null);
});