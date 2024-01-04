/*
write a doubly linked list class that has a head, tail.
Needs methods:
input: node (and int for position for insert)

Set: set the head and tail of ll

Insert: insert nodes before and after other nodes, given position,position of head node is 1

remove: remove node of given value

search: search for node of given value

**need to account for if inpt node is in ll or a stand alone node

//example

//ll already created:
1 <-> 2 <-> 3 <-> 4 <-> 5

nodes already created with vals 3, 3, 6

//setHead
check if val is in the linked linklist
call search with node
if true
get the node = node
get the node's before = before
set the before's next to the node's next
set the node's next to the head
set the node's before to null

//setTail
check if val is in the linkedlist
if search returns true
  store the node's prev = before
  set before's next = node's next
  set the node's prev to be tail
  set tail's next to be node
  set the node's next to be null
  this.tail = node

set the


//search
set curr to head
while curr.val isn't null
  if curr.val === target return curr
  update curr to be curr.next
return false;

*/

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if(this.search(node.value)) {
      console.log('found')
      var before = node.prev;
      console.log('before', before)
      before.next = node.next;
      node.next.prev = before;
    }
    node.prev = null;
    node.next = this.head;
    this.head = node;
  }

  setTail(node) {
    console.log('node', node.value)
    if(this.search(node.value)) {
      var before = node.prev;
      before.next = node.next;
      node.next.prev = before;
    }
    this.tail.next = node;
    node.prev = this.tail;
    node.next = null;
    this.tail = node;
  }

  search(value) {
    var curr = this.head;
    while(curr.value !== null) {
      if(curr.value === value) return true;
      curr = curr.next;
    }
    return false;
  }

  // setTail(node) {

  // }

}
var tail6 = new Node(6)
var head3 = new Node(3)
var list = new DoublyLinkedList()
list.head = new Node(1)
list.tail = new Node(5)

list.head.next = new Node(2)
list.head.next.prev = list.head
//
list.head.next.next = head3;
list.head.next.next.prev = list.head.next
list.head.next.next.next = new Node(4)
list.head.next.next.next.prev = list.head.next.next
list.head.next.next.next.next = list.tail
list.tail.prev = list.head.next.next.next
list.tail.next = null;

console.log(list.setHead(head3))
list.setTail(head3)
console.log(list)
console.log('tail', tail6)