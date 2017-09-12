'use strict';

// Export an object that has add and sub methods that implement addition and subtraction

module.exports = {
  add: (num1,num2) => {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
      return num1 + num2;
    }
    else {
      return null;
    }
  },
  sub: (num1,num2) => {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
      return num1 - num2;
    }
    else {
      return null;
    }
  }
};
