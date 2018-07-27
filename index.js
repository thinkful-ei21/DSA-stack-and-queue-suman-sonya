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

////////////////////////// starTrek stack //////////////////////////////

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

// main();

/////////////////////////////// palindrome /////////////////////////////////////

function is_palindrome(s) {
  const stack = new Stack;
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // loop through string
  for (let i = 0; i < s.length; i++) {
    // push each letter into stack
    stack.push(s.charAt(i))
  }
  // pop each letter out and track the returned values
  let sReverse = '';
  while (stack.top !== null) {
    sReverse += stack.pop();
  }
  if (s === sReverse) {
    return true;
  }
  // if string === popped value string it's a palindrome! 
}

// true, true, true
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

/////////////////////////////////// matching parentheses /////////////////////////////////

function matchingParens(exp) {
  const stack = new Stack;
  const countStack = new Stack;
  // push each element of exp into stack starting with 0 index
  // if the char is ( push its count to countStack
  // if the char is ) pop a value out of countStack
  for (let i = 0; i < exp.length; i++) {
    if (exp.charAt(i) === '(') {
      countStack.push(i);
    } 
    if (exp.charAt(i) === ')' && countStack.top !== null) {
      countStack.pop(i);
    }
    if (exp.charAt(i) === ')' && countStack.top === null) {
      console.log(`the ')' at location ${i + 1} is missing its match`)
    }
  }
  while (countStack.top !== null) {
    console.log(`the '(' at location ${countStack.top.data + 1} is missing its match`);
    countStack.pop();
  }

}

matchingParens('1+(1*1)+(1+1((');


