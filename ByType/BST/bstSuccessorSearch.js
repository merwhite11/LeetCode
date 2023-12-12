/*
input: input node in a bst
output: inorder successor
inorder successor of a node is the node w the smallest key greater than input node

          20
    9             25
5       12
      11  14

input node : 9
inorder succ : 11

in: 14
succ: 20

in: 11
succ: 12

plan:
storage for smallest so far

if the input node has no children
WHILE THERE's A PARENT LOOP
go to parent
  if parent is greater -> store as smallest, compare to current smallest
    update current to be parent

if the input has right child
  compare right child to smallest
  update right child to be current

return smallest
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

BinarySearchTree.prototype.insert = function(key) {

  var root = this.root;
  if(!root) {
      this.root = new Node(key);
      return;
  }
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

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  var curr = inputNode
  console.log('curr.right', curr.right)
  if(curr.right == null) {
    curr = curr.parent;
    while(curr.key < inputNode.key) {
      curr = curr.parent;
    }
    return curr.key;
  }
  if(curr.right !== null) {
   curr = curr.right;
   while(curr.left) {
    curr = curr.left
   }
   return curr.key
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

var root = new BinarySearchTree()
root.insert(20)
root.insert(9)
root.insert(25)
root.insert(5)
root.insert(12)
root.insert(11)
root.insert(14)

// console.log(root)
var key = root.getNodeByKey(11)
console.log(root.findInOrderSuccessor(key))
