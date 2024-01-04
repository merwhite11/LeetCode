/*
input: heads of two sorted linked lists
output: one merged linked list
need to merge in place (splice together)

example:
list 1 : 1 -> 2 -> 4
list 2: 1 -> 3 -> 4

output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

plan:
create new list
make copy of new list in another list

while list1 and list2 still hav nodes
  if list1.val is less than list2.val
    set copy.next to list1.val
    move list1 up a node
  else
    set copy.next to list2
    move list2 up a node
  set newList to copy.next

recursive (list1, list2, copy) {
  if list1 or list2 are null break;
  if list1.val is less than list2.val
    set copy.next to list1.val
    move list1 up a node
  else
    set copy.next to list2
    move list2 up a node
  set newList to copy.next
  call recursive with list1, list2 and copy

}

4 >=4
1 -> 1 -> 2 -> 3 -> 4


*/

var mergeTwoLists = function(list1, list2) {
  var newHead = new ListNode();
  var copy = newHead;
  function merge (list1, list2, newHead) {

    if(list1 === null || list2 === null) return;
    if(list1.val < list2.val) {
      copy.next = list1
      list1 = list1.next;
    } else {
      copy.next = list2;
      list2 = list2.next
    }
    merge(list1, list2, copy.next)
   }
   merge(list1, list2, copy);
   newHead.next = list1 !== null ? list1 : list2;
   return newHead.next;

};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var list1 = new ListNode(1, 2)
list1.next = new ListNode(2, 4)
list1.next.next = new ListNode(4)

var list2 = new ListNode(1, 3)
list2.next = new ListNode(3, 4)
list2.next.next = new ListNode(4)

// console.log('list1', list1)
// console.log('list2', list2)

var test1 = new ListNode()
var test2 = new ListNode()

console.log(mergeTwoLists(list1, list2))
