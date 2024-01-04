/*
input: takes in a bt and inverts -> swap every left node for corresponding right node


            1
      2          3
  4       5     6  7
8   9

            1
      3          2
  7      6      5   4
                  9   8


plan:
create a queue set to root node [1]

while there's still els in queue
  set current to dequeued el
  if current === null, continue
  swap left and right nodes of current
  push to queue


[1]
swap 2 and 3
[3, 2]

3
swap 6 and 7
[2, 7, 6]

2
swap 4 and 5
[5, 4, 7, 6]

5
swap null and null



*/

function invertBinaryTree(tree) {
  var queue = [tree];
  while(queue.length) {
    var curr = queue.shift();
    if(curr === null) continue;
    var storeLeft = curr.left;
    curr.left = curr.right;
    curr.right = storeLeft;
    queue.push(curr.left, curr.right)
  }
}



class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(1);
  root.left = new BST(2);
  root.left.left = new BST(4);
  root.left.left.left = new BST(8);
  root.left.left.right = new BST(9);
  root.left.right = new BST(5);
  root.right = new BST(3);
  root.right.left = new BST(6);
  // root.right.left.right = new BST(14);
  root.right.right = new BST(7);

  console.log('output:', invertBinaryTree(root))