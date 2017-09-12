'use strict';

module.exports = {
  add: function(num1, num2) {
    if (isNaN(num1 || num2)) {
      return null;
    } else {
      return num1 + num2;
    }
  },
  sub: function(num1, num2) {
    if (isNaN(num1 || num2)) {
      return null;
    } else {
      return num1 - num2;
    }
  }
}
