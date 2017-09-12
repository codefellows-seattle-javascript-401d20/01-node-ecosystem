'use strict';

// Export a function that takes in a name and returns "hello" + name

module.exports = name => {
  if(typeof name === 'string') {
    return `hello ${name}`;
  }
  else {
    return null;
  }
};
