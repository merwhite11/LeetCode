/*
input: binary tree
output: sum of its node depths (distance between a node and the tree's root)

              1
      2              3
   4     5        6     7
  8 9   10       

breadth first search
create a 'distance' variable
for each row add 1 to distance var

pass running sum and updated distance var into each iteration

q = {1: [root],
    2: [2, 3],
    3: [4, 5, 6, 7],
    4: [8, 9]
    
}
sum = 16

*/

function nodeDepths(root) {
    var queue = {1: [root]};
    var sum = 0;
    function traverse(dist, nextDistance) { //3, 4
        if(!queue[dist]) return;
        while(queue[dist].length) {
            var node = queue[dist].shift()
            console.log('node', node)
            if(node.left) {
                sum += dist;
                if(!queue[nextDistance]) queue[nextDistance] = [node.left];
                else queue[nextDistance].push(node.left)
            }
            //if right -> add distance to sum -> push right to queue
            if(node.right) {
                sum += dist;
                if(!queue[nextDistance]) queue[nextDistance] = [node.right];
                else queue[nextDistance].push(node.right);
            }
        }
        dist = nextDistance;
        nextDistance++;
        console.log('sum', sum)
        traverse(dist, nextDistance)
    }
    traverse(1, 2)
    return sum;
  }


  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

var root = new BinaryTree(1)

root.left = new BinaryTree(2)
root.right = new BinaryTree(3)

root.left.left = new BinaryTree(4)
root.left.right = new BinaryTree(5)
root.right.left = new BinaryTree(6)
root.right.right = new BinaryTree(7)

root.left.left.left = new BinaryTree(8)
root.left.left.right = new BinaryTree(9)

console.log(nodeDepths(root))