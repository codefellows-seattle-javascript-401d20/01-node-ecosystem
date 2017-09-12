'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

console.log(greet());
console.log(greet('ron'));

console.log(arithmetic.add(1,2));
console.log(arithmetic.sub(1,2));

console.log(arithmetic.add(1,'2'));
console.log(arithmetic.sub('1',2));


