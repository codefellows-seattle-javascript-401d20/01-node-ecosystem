'use strict';

const arithmetic = require('../lib/arithmetic.js');

test('arithmetic.add() should return null', () => {
  let result = arithmetic.add();
  expect(result).toEqual(null);
});

test('arithmetic.sub() should return null', () => {
  let result = arithmetic.sub();
  expect(result).toEqual(null);
});

test('arithmetic.add(2,\'hi\') should return null', () => {
  let result = arithmetic.add(2,'hi');
  expect(result).toEqual(null);
});

test('arithmetic.sub(2,\'hi\') should return null', () => {
  let result = arithmetic.add(2,'hi');
  expect(result).toEqual(null);
});

test('arithmetic.add(2,3) should return 5', () => {
  let result = arithmetic.add(2,3);
  expect(result).toEqual(5);
});

test('arithmetic.sub(2,3) should return -1', () => {
  let result = arithmetic.sub(2,3);
  expect(result).toEqual(-1);
});
