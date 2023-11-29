/*
input: LinkedList with at least one node.
output: Middle node 
constraints: if there are even number of nodes and no middle node, return second

2  7  3  5

plain english:
somehow figure out which node is in the middle
create an object
var counter = 1
loop through the nodes
    for each node, store in obj at storage[counter] = current node
    counter ++

divide counter by 2, round up
return object[counter]
*/

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  function middleNode(linkedList) {
    var storage = [];
    function traverse(node) {
        storage.push(node);
        if(node.next) {
            traverse(node.next)
        } else return;
    }
    traverse(linkedList);
    if(storage.length === 1) return storage[0];
    else {
        var mid = Math.floor(storage.length/2);
        return storage[mid];
    }
  }

  var head = new LinkedList(1)
  head.next = new LinkedList(7)
  head.next.next = new LinkedList(3)
  head.next.next.next = new LinkedList(5)
//   head.next.next.next.next = new LinkedList(6)

  console.log(middleNode(head))