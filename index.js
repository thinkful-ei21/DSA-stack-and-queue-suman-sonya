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

function peek(stack) {
  // if stack is empty return error message
  if (stack.top === null){
    throw new Error('the stack is empty')
  }
  // log out the top item
  console.log(stack.top.data);
}

function display(stack) {
  // if stack is empty, return error message
  if (stack.top === null) {
    throw new Error('the stack is empty')
  }
  // log out the full stack
  console.log(util.inspect(stack, false, null));
}

function main() {
  const starTrek = new Stack;

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  peek(starTrek);
  display(starTrek);

  starTrek.pop();
  starTrek.pop();

  display(starTrek);
}

main();


