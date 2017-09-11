'use strict';

/*
 * Export a function that takes in a name and returns "hello " + name
 * If name is not a string, returns null.
 */

module.exports = function(name) {
  return typeof name === 'string' ? `hello ${name}` : null;
}
