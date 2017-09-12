'use strict';

const arithmetic = {};

arithmetic.add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number')
    return a + b;
  else
    return null;
};


arithmetic.sub = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number')
    return a - b;
  else
    return null;
};

module.exports = arithmetic;