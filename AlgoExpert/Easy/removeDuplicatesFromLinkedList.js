/*
input: head of singly linked list - nodes sorted by value
output: modified linked list w no duplicates
constraints: must be modified in place

traverse list function
    if curr.next = curr.val
        update current.next to be curr.next.next
        cur.next.next becomes new curr
        call traverlist on new curr

return linkedList


*/

function removeDuplicatesFromLinkedList(linkedList) {
    if(linkedList.next) {
        if(linkedList.value === linkedList.next.value) {
            linkedList.next = linkedList.next.next;
            removeDuplicatesFromLinkedList(linkedList)
        } else {
            removeDuplicatesFromLinkedList(linkedList.next)
        }
    }
    return linkedList;
}

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

var head = new LinkedList(1)
head.next = new LinkedList(1)
head.next.next = new LinkedList(3)
head.next.next.next = new LinkedList(4)
head.next.next.next.next = new LinkedList(4)
head.next.next.next.next.next = new LinkedList(5)
head.next.next.next.next.next.next = new LinkedList(6)
head.next.next.next.next.next.next.next = new LinkedList(6)

console.log('result', removeDuplicatesFromLinkedList(head))