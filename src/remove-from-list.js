const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
*/


function indexOf(input, element) {
  let currentN = input.next;
  let currentV = input.value;
  let position = 0;
  while (currentN) {
    if (currentV === element) {
      return position;
    }
    currentV = currentN.value;
    currentN = currentN.next;
    position++;
  }
  return -1;
}

function removeAt(input, position) {
  let currentN = input.next;
  let currentV = input.value;
  if (position === 0) {
    input.next = currentN.next;
    input.value = currentN.value;
  } else {
    let prev = null;
    let index = 0;

    while (index < position && currentN.next !== null) {
      prev = currentN;
      currentN = currentN.next;
      index++;
    }
    if (index < position) {
      prev.next = null;
    } else {
      prev.value = prev.next.value;
      prev.next = currentN.next;
    }
  }
  return input;
}


function removeKFromList(l, k) {
  if (indexOf(l, k) === -1) {
    function indexOfExtra(l) {
      let currentN = l.next;
      let currentV = l.value;
      let position = 0;
      while (currentN) {
        currentV = currentN.value;
        currentN = currentN.next;
        position++;
      }
      return position;
    };
    return removeAt(l, indexOfExtra(l, k))
  }
  while (indexOf(l, k) >= 0) {
    removeAt(l, indexOf(l, k));
  }
  return l;
}

module.exports = {
  removeKFromList
};
