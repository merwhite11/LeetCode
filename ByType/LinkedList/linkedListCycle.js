/*
input: head of a linked list
output: true if list has a cycle , false if not
cycle : a node in the list that can be reached again by following the next pointer
pos: index of the node that the tail's next pointer is connected to, not a param
pos: is tail's next

example

3 -> 2 -> 0 -> 4
head = [3, 2, 0, -4] // pos = 1 (index that tail connects to, val 2)
true

1 -> 2 // pos 0
true -> cycle where tail connects to 0th node

head = [1]  // pos = -1
false -> no cycle

plan:

is it possible for the tail to connect back to another node

var counter
var curr = head
while curr.next
  counter++
  curr = curr.next

if counter > 1 return true else false

//solution:
fast = head // 3

WHILE LOOP // 3 and 3.next
head = 2
fast = 0

// 0 and 0.next
head = 0
fast = 2 (next is 4, 4.next takes you to pos)

//
head = -4
fast = 0

head = 2
fast = 2 //RETURN TRUE

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function(head) {
  let slow = head, fast = head;
  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    console.log('slow', slow)
    console.log('fast', fast)
    if(slow === fast) return true;
  }
  return false;
}

var head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);

console.log(hasCycle(head))