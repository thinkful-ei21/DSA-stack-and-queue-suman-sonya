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
  // push each element of exp into stack starting with first character
  for (let i = 0; i < exp.length; i++) {
    // if the char is '(' push its count to countStack
    if (exp.charAt(i) === '(') {
      countStack.push(i);
    } 
    // if the char is ')' and the countsStack isn't empty pop a value out of countStack
    if (exp.charAt(i) === ')' && countStack.top !== null) {
      countStack.pop(i);
    }
    // if the char is ')' and the countStack is empty print a message about missing paren match
    if (exp.charAt(i) === ')' && countStack.top === null) {
      console.log(`the ')' at location ${i + 1} is missing its match`)
    }
  }
  //if the countStack is not empty after the loop print a message about missing paren match
  while (countStack.top !== null) {
    console.log(`the '(' at location ${countStack.top.data + 1} is missing its match`);
    countStack.pop();
  }

}

// matchingParens('1+(1*1)+(1+1((');



/////////////////////////// sort stack ///////////////////////////////////


function sortStack(stack) {
  let sorted = new Stack;
  let start = stack;
  let hold = new Stack;
  let largest = null;
  // loop through start and hold stacks, alternating
  while (start.top !== null || hold.top !== null) {
    // if start stack is full loop through it
    if (start.top !== null) {
    // loop through stack by moving it from one stack to another
    while (start.top !== null) {
      // if top is greater than 'largest' replace 'largest' 
      if (start.top.data > largest) {
        // push prev 'largest' to hold stack
        if (largest !== null) {
          hold.push(largest)
        }
        largest = start.top.data;
        start.pop();
      // push top to hold stack
      } else {
        hold.push(start.top.data)
        start.pop();
      }
   }
   // push largest to sorted stack
  sorted.push(largest);
  // set largest back to 0;
  largest = null;
  } else {
    while (hold.top !== null) {
      // if top is greater than 'largest' replace 'largest' 
      if (hold.top.data > largest) {
        if (largest !== null) {
          start.push(largest)
        }
        largest = hold.top.data;
        hold.pop();
      // push top to start stack
      } else {
        start.push(hold.top.data)
        hold.pop();
      }
    }
    // push largest back to 0;
   sorted.push(largest);
  // set largest back to 0;
  largest = null;
  }
  
}

  // pop out next variable, compare to 'largest and replace or push to holding stack etc.
  // at the end of the loop put 'largest' into sorted stack
  console.log(util.inspect(sorted, false, null));
}

let numStack = new Stack;
numStack.push(56);
numStack.push(45);
numStack.push(20);
numStack.push(100);
numStack.push(139);

sortStack(numStack);


