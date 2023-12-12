/*
input: bst, positive int
output: kth largest integer contained in bst

k is <= number of nodes in tree
duplicates considered distinct vals


            15
      5           20
  2       5     17    22
1   3

k = 3
output: 17

plan:
counter set to 0
storage array [22, 20, 17, 15] -> reverse in order traversal

start at root
if(tree.right) call traverse on root.right
push node into storage
while there's a left call traverse on root.left

slice storage 0, 3

//
if storage.length === k return
curr = 15
right: trav(20)
curr = 20 // PUSH [22, 20]
  right: trav(22) ///
  PUSH [22]

  left = trav(17)
  PUSH[22, 20, 17]

*/

function findKthLargestValueInBST(tree, k, storage) {
  var storage = [];
  function traverse(node) {
    if(node.right) traverse(node.right);
    storage.push(node.value);
    if(storage.length >= k) return storage[k-1]
    if(node.left) traverse(node.left);
  }
  return traverse(tree)

}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var root = new BST(15);
root.left = new BST(5);
root.right = new BST(20)
root.left.left = new BST(2);
root.left.right =new BST(5);
root.left.left.left = new BST(1);
root.left.left.right = new BST(3);
root.right.left = new BST(17);
root.right.right = new BST(22);

// const root = new BST(10);
//   root.left = new BST(5);
//   root.left.left = new BST(2);
//   root.left.left.left = new BST(1);
//   root.left.right = new BST(5);
//   root.right = new BST(15);
//   root.right.left = new BST(13);
//   root.right.left.right = new BST(14);
//   root.right.right = new BST(22);

var array = []

console.log(findKthLargestValueInBST(root, 3, array))

// console.log(root)