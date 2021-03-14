'use strict';

numbers.pop = function() {
  // write code here
  if (this.length === 0) {
    return undefined;
  }

  const lastElem = this[this.length - 1];

  this.length -= 1;

  return lastElem;
};