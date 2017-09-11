'use strict';

/*
 * The add method has an arity of two
 * If either parameter is a non-number the function returns null
 * Else returns the sum of the 2 numbers.
 */

module.exports.add = function(num1, num2) {
  return typeof num1 != 'number' || typeof num2 != 'number' ? null : num1 + num2;
};

/*
 * The sub method has an arity of two
 * If either parameter is a non-number the function returns null
 * Else return the second parameter subtracted from the first parameter
 */

module.exports.sub = function(num1, num2) {
  return typeof num1 != 'number' || typeof num2 != 'number' ? null : num1 - num2;
};
