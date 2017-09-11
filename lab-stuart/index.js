'use strict';

const greet = require('./lib/greet.js');
const greet = require('./lib/arithmetic.js');

console.log(greet());
console.log(greet('world'));

console.log(arithmetic.add(10, 10));
console.log(arithmetic.sub(10, 10));
console.log(arithmetic.add('test', 10));
console.log(arithmetic.sub('test', 10));
