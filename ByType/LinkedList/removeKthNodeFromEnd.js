/*
input: head of singly linked list // int k
//removes kth node from the end of the list
//removal done in place -> mutatue og list
//input head should remain the head
//if the head is the node that's supposed to be removed -> function should mutate vale and next pointer
output: no return

example:
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 //k = 4
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9

plan:
set curr to head
set counter to 0
get to tail of list
while curr is not null
  store each curr val with indx
  keep updating curr to be curr.next
  counter++

find the node of the last counter val - k - 1
store it's next node as removeNode
store removeNode's next as newNext
set next of prev node to newNext

need to change target node's prev's next to target node's next
//0
counter = 1

//1
counter = 2

*/
/*
function removeKthNodeFromEnd(head, k) {
  let curr = head;
  let counter = 0;
  const storage = {};
  while(curr !== null) {
    counter++;
    storage[counter] = curr;
    curr = curr.next
  }
  // console.log('counter', counter)
  // console.log('storage', storage)
  const prevNodeIdx = counter - k;
  if(prevNodeIdx === 0) {
    let curr = head;
    while(curr.next !== null) {
      if(edgeCounter = counter - 1) {
        curr.value = null;
        break;
      }
      curr.value = curr.next.value;
      curr = curr.next;
      edgeCounter ++
    }
  } else {

    const removeNode = storage[prevNodeIdx].next;
    const newNext = removeNode.next;
    storage[prevNodeIdx].next = newNext;
  }
  console.log(head)
  // console.log(prevNodeIdx)
}

*/


function removeKthNodeFromEnd(head, k) {
  let first = head;
  let second = head;
  counter = 1;
  while(counter <= k) {
    second = second.next;
    counter++;
  }
  if(second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    console.log(head)
    return;
  }
  while(second.next !== null) {
    first = first.next;
    second = second.next;

  }
  const removeNode = first.next;
  const newNext = removeNode.next;
  first.next = newNext;
  console.log(head)

}

//
/*
first = 0
second = 2

first = 1
second = 3

first = 2
second = 4

first = 3
second = 5

*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var head = new LinkedList(0)
head.next = new LinkedList(1)
head.next.next = new LinkedList(2)
head.next.next.next = new LinkedList(3)
head.next.next.next.next = new LinkedList(4)
head.next.next.next.next.next = new LinkedList(5)
// head.next.next.next.next.next.next = new LinkedList(6)
// head.next.next.next.next.next.next.next = new LinkedList(7)
// head.next.next.next.next.next.next.next.next = new LinkedList(8)
// head.next.next.next.next.next.next.next.next.next = new LinkedList(9)

console.log(removeKthNodeFromEnd(head, 6))

/*
//0
curr.value -> 1

//1
curr.value = 2

//2
curr.value = 3

//3
curr.value = 4

//4
curr.value = 5

*/