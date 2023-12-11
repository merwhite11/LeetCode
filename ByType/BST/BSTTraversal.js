/*
input: 3 functions take in a bst and an empty array
traverse bst, add nodes to input array

in order: left: child -> parent for each node until no parent
          then right

pre order: root -> down left, down right

post order: left leaves, parent, right leaves, parent

          10
      5       15
    2   5       22
  1


in order:
LEFT
traverse(10) // [1, 2, 5, 5, 10]
                                      traverse(15) // [1, 2, 5, 5, 10, 15]
                                      traverse(22) //[1, 2, 5, 5, 10, 15]
  traverse(5) //[1, 2, 5]
                                      traverse(5)
                                        data = [1, 2, 5, 5]
    traverse(2) // [1, 2] //no right
      traverse(1)
        data = [1]

preOrder
if no tree return array
push current node to array
call preOrder on current's left
call preOrder on current's right

postOrder
keep calling pO on left
keep calling pO on right
push to array

[1, 2, 5, 5, 22, 15, 10]

*/

class BST {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraverse(tree, array) {
  // if(!tree) return array;
  if(tree.left) inOrderTraverse(tree.left, array);
  array.push(tree.val)
  if(tree.right) inOrderTraverse(tree.right, array);
  return array;
}

function preOrderTraverse(tree, array) {
  array.push(tree.val);
  if(tree.left) preOrderTraverse(tree.left, array);
  if(tree.right) preOrderTraverse(tree.right, array);
  return array;
}

function postOrderTraverse(tree, array) {
  if(tree.left) postOrderTraverse(tree.left, array);
  if(tree.right) postOrderTraverse(tree.right, array);
  array.push(tree.val);
  return array;
}



const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  // root.right.left = new BST(13);
  // root.right.left.right = new BST(14);
  root.right.right = new BST(22);

  console.log(root)
 console.log(inOrderTraverse(root, []))
 console.log(preOrderTraverse(root, []))
 console.log(postOrderTraverse(root, []))