/*
input:2 sorted lists
output: merge into 1 sorted list

example:
var list1 = [1, 2, 4]
var list2 = [1, 3, 4]
output: [1, 1, 2, 3, 4, 4]

newlist = []

1 = 1
newlist.next = [1, 3, 4]
list 2 = [3, 4]

new list = [1, 3, 4]

1 < 3
newList.next =
list1 = 2

newList = [1, 2, 4]







create empty


 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

//plan
get the value of list1
get the value of list2
if list1 > list2
  value of list1 becomes list2 value
  list2 next becomes list1

if list1 <= list2
  store list1 next
  list1 next becomes list2
  list2 next becomes list1's old next

*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

var mergeTwoLists = function(list1, list2) {
  const newHead = new ListNode();

  let newList = newHead;

  while(list1 !== null & list2 !== null) {
    if(list1.val < list2.val) {
      newList.next = list1;
      list1 = list1.next;
    } else {
      newList.next = list2;
      list2 = list2.next
    }
    newList = newList.next;
    console.log(newList)
  }
  newList.next = list1 !== null ? list1 : list2;
  console.log(newHead.next)
  return newHead.next;

}

// class ListNode {
//   constructor(value, next) {
//     this.val = value;
//     this.next = next;
//   }
// }
var list1 = new ListNode(1, 2)
var list1 = new ListNode(1, 2)
var list1 = new ListNode(2, 4)
var list1 = new ListNode(4)
var list2 = new ListNode(1, 3)
var list2 = new ListNode(3, 4)
var list2 = new ListNode(4)

console.log(list1)
console.log(list2)

console.log()