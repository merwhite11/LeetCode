/*
input: binary tree
output: diameter = length of longest path
path = chain of connected nodes, no node connected to more than 2 other nodes
length of path = number of edges between path's first node and last node

//example
 input:
            1
      3          2
   7     4
 8         5
9            6

output: 6 -- 9, 8, 7, 3, 4, 5, 6

depth first O(n) time
O(h) space if balanced, but worst case O(n) if like a linked list
space is consumed by callstack functions that are waiting for recursive return
less balanced tree = more functions stacking up in the callstack

plan:
create height var
left -> go all the way to leaf : add to height var
right -> go to leaft : add to height var
add left and right to get total height

diameter = max of left diameter , right diameter or largest path going thru curr node
  aka add left height to right height
do depth first search until leaf
when you reach a leaf -> return diameter and max(leftHeight, rightHeight) + 1
*/
function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height
  }
}
function getTreeInfo(tree) {
  if(tree === null) return new TreeInfo(0,0);

  leftTreeInfo = getTreeInfo(tree.left);
  rightTreeInfo = getTreeInfo(tree.right);
  console.log('left', leftTreeInfo.height)
  console.log('right', rightTreeInfo.height)
  longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
  currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
  return new TreeInfo(currentDiameter, currentHeight)
}


class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
  root.left = new BinaryTree(3);
  root.left.left = new BinaryTree(7);
  root.left.left.left = new BinaryTree(8);
  root.left.left.left.left= new BinaryTree(9);
  root.left.right = new BinaryTree(4);
  root.left.right.right = new BinaryTree(5);
  root.left.right.right.right = new BinaryTree(6);
  root.right = new BinaryTree(2);
  // root.right.left = new BST(6);
  // // root.right.left.right = new BST(14);
  // root.right.right = new BST(7);

  // console.log('root', root)
  console.log('output:', binaryTreeDiameter(root))