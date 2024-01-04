/*
input: two sorted lists
output: merge two lists into oen sorted list

create a new List
copy

list 1 = [2, 2, 4]
          x

list 2= [1, 3, 4]
            x

newList.next = new ListNode(1)
//newList
newList.next = new ListNode(2)
//new [1, 2]

 start pointer at both heads

 compare vals of each list

 if list1's header has the lower number
  set newList = list1
  move list1 pointer up 1

else if list2's head has the lower number
  set newList = list2
  //newList = [1, 3, 4]
  move list2 pointer up 1

2 < 3

list1 has smaller number
  set newList.next = list1
  //[1, 2, 2, 4]

list 1 = [2, 2, 4]
list 2= [1, 3, 4]
1 < 2
newList = [1]

list 1 = [2, 2, 4]
list 2 = []








*/

var mergeTwoSortedLists = function(list1, list2) {
  var newList = new ListNode();
  let copy = newList;
  while(list1 !== null && list2 !== null) {
    if(list1.val < list2.val) {
      copy.next = list1;
      list1 = list1.next;
    } else {
      copy.next = list2;
      list2 = list2.next;
    }
    copy = copy.next
  }
  copy.next = list1 !== null ? list1 : list2;
  console.log(copy)
  console.log(newList)
}



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

console.log(mergeTwoSortedLists(list1, list2))