//install node
//install npm
//install es6 with npm install -g es6
//to run: node reverse-linked-list.js

//Reverse a linked list
//1-2-3-4
//4-3-2-1

//Create a linked list
class LinkedListNode {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

// create the first node
var head = new LinkedListNode(1);

// add a second node
head.next = new LinkedListNode(2);

// add a third node
head.next.next = new LinkedListNode(3);

// add a fourth node
head.next.next.next = new LinkedListNode(4);

console.log(head);

function reverse(head) {
  if (!head || !head.next) {
    return head;
  }
  let tmp = reverse(head.next);
  head.next.next = head;
  head.next = undefined;
  return tmp;
}

let test = reverse(head);
console.log(test);


