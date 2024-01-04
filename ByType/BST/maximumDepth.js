/*
input: root of binary tree
output: return max depth

          3
    9           20
            15      7
output: 3

//recursive DFS
base case: when root === null -> return 0

left = max(9)
        max(null) // 0 return 1
right = max(20)
          LEFT

         max(15)   right max(7)

//iterative dfs
stack = root

curr = 3
stack [9, 20]
counter = 1

curr = 9
counter = 2

curr = 20
stack[15, 7]

curr

*/
//RECURSIVE
// var maxDepth = function(root) {
//   if(root === null) return 0;
//   let leftDepth = maxDepth(root.left);
//   let rightDepth = maxDepth(root.right);
//   return Math.max(leftDepth, rightDepth) + 1
// };
//ITERATIVE BFS
/*
var maxDepth = function(root) {
  if(root === null) return 0;
  var queue = [root];
  var counter = 0;
  while(queue.length) {
    for(let i = 0; i < queue.length; i++) {
      var curr = queue.shift();
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
    console.log(queue)
      counter++;
  }
  return counter;
};
*/
//ITERATIVE DFS

var maxDepth = function(root) {
  if(root === null) return 0;
  var stack = [[root, 1]];
  var counter = 0;
  while(stack) {
    var [curr, depth] = stack.pop();
    console.log('curr', curr, depth)
      // stack.push(curr.left);
      // stack.push(curr.right);
  }
}

//iterative
/*
put root in the queue
remove first from queue
push in left and right

curr = 9
no children to push

curr = 20
push in 15 and 17

curr = 15
no children

curr = 7
no children

*/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);

console.log(maxDepth(root))