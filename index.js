const util = require('util');

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
};

class Stack {
  constructor() {
    this.top = null
  }

  push(value) {
    // if stack is empty, set new node to the top pointing at null
    if (this.top === null) {
      this.top = new _Node(value, null);
      return this.top;
    }
    // if stack is not empty, set new node to the top pointing at the previous top
    const newNode = new _Node(value, this.top)
    this.top = newNode;
  }

  pop(value) {
    // set top pointer to next item
    // set next item to top item
    const node = this.top;
    this.top = this.top.next;
    // return popped item;
    return node.data;
  }
}

function main() {
  const starTreck = new Stack;

  starTreck.push('Kirk');
  starTreck.push('Spock');
  starTreck.push('McCoy');
  starTreck.push('Scotty')

  console.log(util.inspect(starTreck, false, null));
}

main();

