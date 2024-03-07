/*
input: binary tree
output: diameter
diameter = longest path, doesn't need to pass thru root
path = collection of connected nodes - no node is connected to more than 2 other nodes
length of path: number of edges between the path's first node and last node

go to leaf and work your way up

post order traversal
every time you go down a level -> add to height
everytime there's a

*/



// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var root = new BST(1);
root.left = new BST(3);
root.right = new BST(2)
root.left.left = new BST(7);
root.left.right =new BST(4);
root.left.left.left = new BST(8);
root.left.right.right = new BST(5);
root.left.left.left.left = new BST(9);
root.left.right.right.right = new BST(6);