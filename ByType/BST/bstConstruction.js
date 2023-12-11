/*
write a bst class for a binary search tree
-- insert method
-- remove method (should not remove if there is only 1 node)
-- contains

          12
      5       15
    2   5   13   22
  1           14


//insert : 12

curr = root
compare num to root
while there is this.right && this.left
if larger -> curr becomes this.right
if smaller -> curr becomes this.left

break out of loop curr = 13
if smaller -> this.left = insert
if larger -> this.right = insert

//contains: 15
curr = root
compare num to root
while there is a curr.left and curr.right
if target > curr.val -> curr becomes curr.right
if target < curr.val -> curr becomes curr.left
if target === curr.val -> return true

return false

//remove
curr = this
if no right or left -> return this

find the target node by traversing through tree
grab smallest val in right subtree
replace target with smallest val

delete it in it's original place
  change parent node.left to be null






*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    var curr = this;
    var newNode = new BST(value)
    if(this.value === null) {
      this.value = newNode;
      return this;
    }
    while(curr.left && curr.right) {
      if(value >= curr.value) curr = curr.right;
      else curr = curr.left;
    }
    if(value >= curr.value) curr.right = newNode;
    else curr.left = newNode;
    return this;
  }
  contains(value) {
    var curr = this;
    while(curr.value) {
      console.log('curr', curr.value)
      if(curr.value === value) return true;
      if(curr.value >= value && curr.right) curr = curr.left;
      else if(curr.value < value && curr.left) curr = curr.right;
      else return false;
    }
  }
  remove(value, parentNode = null) {
    var curr = this;
    var toRemove;
    while(curr.value) {
      if(curr.value === value) {
        toRemove = curr;
        break;
      }
      if(value > curr.value && curr.right) {
        parentNode = curr;
        curr = curr.right;
      }
      else if(value < curr.value && curr.left) {
        parentNode = curr;
        curr = curr.left;
      }
      else {
        //two nodes
        if(curr.left && curr.right) {
          curr.value = curr.right.getMinValue()
        }
        //1 node
      }
    }
  }
}

const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);

console.log(root.insert(12))
console.log(root.contains(12))
console.log('remove', root.remove(5))