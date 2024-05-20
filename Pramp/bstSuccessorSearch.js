/*
input: input node in a BST
output: inorder success of input node. if none, return null
*inorder successor: node w the smallest key greater than the input node
aka -- of all the nodes greater than input, return the smallest

example:
              20
          9       25
      5       12
            11  14

input 11 // output 12
input 9 // output 11
input 14 // output 20

walk-thru:
traverse thru tree, comparing input to current
if the current is equal to input -> go to its right child node
if current equals input and is a leaf -> go back up parents until you land of first parent larger

pseudo:
curr = bst.key

curr is leaf && curr < curr.parent -> return curr.parent

curr is leaf && curr > curr.parent ->
  while curr.parent < input -> curr = curr.parent

if curr > input && curr has a left -> findSucc(curr.left)
if curr <= input && cur has a right -> findSucc(curr.right)

*/

function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) { //9
  var curr = inputNode;
  if(curr.right == null) {
    curr = curr.parent;
    while(curr.key < inputNode.key) curr = curr.parent
    return curr;
  }
  if(curr.right !== null) {
    curr = curr.right;
    while(curr.left) curr = curr.left;
    return curr;
  }
}

BinarySearchTree.prototype.insert = function(key) {

  var root = this.root;

  // 1. If the tree is empty, create the root
  if(!root) {
      this.root = new Node(key);
      return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert it
  var currentNode = root;
  var newNode = new Node(key);

  while(currentNode !== null) {
      if(key < currentNode.key) {
          if(!currentNode.left) {
              currentNode.left = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.left;
          }
      } else {
          if(!currentNode.right) {
              currentNode.right = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.right;
          }
      }
  }
}

BinarySearchTree.prototype.getNodeByKey = function(key) {
  var currentNode = this.root;

  while(currentNode) {
      if(key === currentNode.key) {
          return currentNode;
      }

      if(key < currentNode.key) {
          currentNode = currentNode.left;
      }
      else {
          currentNode = currentNode.right;
      }
  }

  return null;
}


var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

var testNode = bst.getNodeByKey(14)
console.log(testNode.key)
console.log(bst.findInOrderSuccessor(testNode))