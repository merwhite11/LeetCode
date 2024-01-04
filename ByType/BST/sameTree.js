/*
input: roots of 2 binary trees
function checks if they're the same tree or not
output: true if same tree, false if not
same = structurally identical, nodes have same values

    1
  2   3

examples

p = [1,2,3], q = [1,2,3]
output: true

p = [1,2], q = [1,null,2]
output: false

p = [1,2,1], q = [1,1,2]
output: false

plan:
queue first in , first out
BFS
create a queue1, put in root1
create a queue2, put in root2

while q1 and q2 have length
  shift q1 and q2
  are they equal ? -> return false if not

  compare q1 left and q2 left
  if they're the same -> push them into queue

  compare q1 right and q2 right
  if they're the same -> push them into queue

new plan:

p = 1
q = 1

same(2, 2)
  return true

same(3, 3)

if

*/

var isSameTree = function(p, q) {

  //base case
  if(p === null && q === null) return true;
  if(p === null || q === null) return false;
  //recursive
  if(p.val === q.val) {

    var left = isSameTree(p.left, q.left);
    var right = isSameTree(p.right, q.right);
  } else return false;
  return left && right
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(1);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);

const q = new TreeNode(1);
q.left = new TreeNode(1);
q.right = new TreeNode(2);

console.log(isSameTree(p, q))