/*
input: root of bst and a num
output: largest key smaller than num or -1
of the nodes that are smaller than num, which one is the biggest?

plan:
set curr to root  //20

traverse(curr)  //10

  //base case
  if no left or right
    if num > curr -> return curr
    else while curr.parent > num -> curr = curr.parent -> return curr

  if num > curr
   if there's a right -> set curr to curr.right -> call traverse(curr.right)

  if num < curr
    if there's a left -> set curr to curr.left -> call traverse(curr.left)

return traverse(curr)


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

BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  let curr = this.root;
  let result = null;

  function traverse(curr) {

    //base case
    if(!curr.right && !curr.left) {
      console.log('hit base case', curr)
      if(num < curr.key) {
        while(num < curr.parent.key) {
          console.log('curr.parent', curr.parent)
          curr = curr.parent
        }
        result = curr.key
        console.log('result', result)
      } else {
        //console.log('curr.key', curr.key)
        result = curr.key
      }
    }

    if(num > curr.key && curr.right) traverse(curr.right);

    if(num < curr.key && curr.left) traverse(curr.left)

  }
  traverse(curr)
  return result
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if(!root) {
      this.root = new Node(key);
      return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
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

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

var result = bst.findLargestSmallerKey(10);

console.log("Largest smaller number is " + result);
