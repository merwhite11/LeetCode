/*
input: potentially invalid BST
output: true if valid bst or false if not

stack last is first out
queue first in first out

valid node is
greater than the values of all nodes to its left
less than or equal to values of all nodes its right

          10
      5       15
    2   5   13   22
  1           14

  //node.val = 10
  return left = validate(5, -inf, 10)
  return right = validate(15, 10, inf)
                    left(13, -inf, 10)       right(22, 15, inf)
                        right(14, -inf, 13)



  ////
  traverse tree starting at root

  if no children -> return true

  if there is l -> check if it's smaller than node
    if it is -> add to storage
    if not -> return false

  if there is a r -> check if it's bigger than node
    if it is -> add to storage
    if not -> return false

  [5, 15]

  pop off from queue -> new node = 15

  [5, 13, 22]

  pop off 22
  [5]
  [2, 5]
  [2]
  1


*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/*
function validateBst(tree) {
  var stack = [tree];
  var min = -Infinity;
  var max = Infinity;
  if(!tree.left && !tree.right) return true;
  while(stack.length) {
    var node = stack.pop();
    console.log('node', node)
    if(node.left) {
      console.log('left', node.left.value)
      console.log('node', node.value)
      if(node.left.value < node.value) stack.push(node.left);
      else return false;
    };
    if(node.right) {
      if(node.right.value >= node.value) stack.push(node.right);
      else return false;
    }
  }
  return true;
}
*/

function validateBst(tree, min = -Infinity, max = Infinity) {
  if(tree === null) return true;
  if(tree.value < min || tree.value >= max) return false;

  return validateBst(tree.left, min, tree.value) && validateBst(tree.right, tree.value, max)

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

console.log(validateBst(root))