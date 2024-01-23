/*
input: 2 lists of potentiall unequal length
each node of ll is a digit -> entire linked list is the non-neg int that all the digits make up
first node reps least significant digit of int  aka int starts at last node
output: returns the head of a new linked list that reps the sum of the ints repped by input lists

constraint: cannot modify input lists //must create new linked list

//example
linkedList1 = 2 -> 4 -> 7 -> 1 //1742
linkedList2 = 9 -> 4 -> 5 //549

output: 1 -> 9 -> 2 -> 2  //1742 + 549 = 2291

plan :

//create input ints helper func
call on each input list
traverse list -> store each val in arr, reverse arr and concat -> make it a num

//add and create new list
add return vals of helper func -> make it a string
create a new ll

loop thru sum string
for each el -> create a new ll node

return new ll

///
create a dummNode(0)
create a pointer -> currentNode = dummy
create carry = 0

//traverse lists
list1 pointer
list2 pointer
newVal = values % 10 + carry // 2 + 9 % 10 = 1 -> create newLinked List with new Val
set currentNode's next to new Node
carry = 2 + 9 / 10 = 1
1 ->
//
4 + 4 + carry = 9 % 10 -> 9
 Math.floor(sums + carry / 10) = 0
update carry = 0
1 -> 9
//
7 + 5 + 0 = 12 % 10 -> 2
Math.floor(12 + 0 /10) -> 1
update carry = 1
1 -> 9 -> 2
//
1 + 0 + 1 = 2 % 10 = 2
Math.floor(1 + 1 /10) -> 0
update carry = 0
1 -> 9 -> 2 -> 2


set currentNode val to 1
if theres a list1 next -> advance list1Pointer to next
if theres a list2 next -> advance list2Pointer to next


*/
function handleLeftovers(list, pointer, currentNode) {

}


function sumOfLinkedLists(list1, list2) {
  let dummyHead = new LinkedList(0);
  let currentNode = dummyHead;
  let carry = 0;
  let pointer1 = list1;
  let pointer2 = list2;

  while (pointer1 !== null || pointer2 !== null || carry !== 0) {
    valOne = pointer1 !== null ? pointer1.value : 0;
    valTwo = pointer2 !== null ? pointer2.value : 0;
    const sumOfVals = valOne + valTwo + carry

    const newVal = sumOfVals % 10
    const newNode = new LinkedList(newVal);
    currentNode.next = newNode;
    currentNode = newNode;

    carry = Math.floor(sumOfVals / 10)

    pointer1 = pointer1 !== null ? pointer1.next : null;
    pointer2 = pointer2 !== null ? pointer2.next : null;
  }

  return dummyHead.next;
}




  //loop from end of int string to front to create ll

  class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  var list1 = new LinkedList(2)
  list1.next = new LinkedList(4)
  list1.next.next = new LinkedList(7)
  list1.next.next.next = new LinkedList(1)

  var list2 = new LinkedList(9)
  list2.next = new LinkedList(4)
  list2.next.next = new LinkedList(5)

  console.log(sumOfLinkedLists(list1, list2))