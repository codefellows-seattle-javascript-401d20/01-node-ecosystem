'use strict';

const arithmetic = require('../lib/arithmetic.js');

/* Invoked with valid arguments */

// add
test('arithmetic.add(1, 2) should return 3', () => {
  let result = arithmetic.add(1, 2);
  expect(result).toEqual(3);
});

// sub
test('arithmetic.sub(2, 1) should return 1', () => {
  let result = arithmetic.sub(2, 1);
  expect(result).toEqual(1);
});

/* Invoked with invalid arguments */

// add
test('arithmetic.add(\'a\', 1) should return null', () => {
  let result = arithmetic.add('a', 1);
  expect(result).toEqual(null);
});

test('arithmetic.add(1, \'a\') should return null', () => {
  let result = arithmetic.add(1, 'a');
  expect(result).toEqual(null);
});

// sub
test('arithmetic.sub(1, \'a\') should return null', () => {
  let result = arithmetic.sub(1, 'a');
  expect(result).toEqual(null);
});

test('arithmetic.sub(\'a\', 1) should return null', () => {
  let result = arithmetic.sub('a', 1);
  expect(result).toEqual(null);
});
