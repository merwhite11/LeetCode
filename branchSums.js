/*
input: binary tree
output: a list of the sums of each branch from left to right
branch is a sum of all values from root to end leaf

            1
      2              3
   4     5        6     7
  8 9   10 

find end most roots 

while current.left
    update current to be 

build a tree
create storage array
set current to root

when there is no more current.left, 
    push sum to array, 
    move back to original
sum left: 
explore down left recursive , keep adding to sum

if there is a current.left -> 
when there is no tree.left -> push sum to storage
branchSumLeft = current + recursive(current.left)   
branchSumRight = current + recursive(current.right)

[15, 16, 18, 10, 11]

if no curr.left return curr, push bsL to storage 
curr = 1
branchSumLeft = 1 + rec(2) // 1 + 14 
branchSumRight = 1 + rec(3)

    curr = 2
    bSL = 2 + rec(4) // 2 + 12 = 14 
    bSR = 2 + rec(5)

    curr = 3
    bSL = 3 + rec(6)
    bSL = 3 + rec(7)

        curr = 4
        bSL = 4 + rec(8) // return 8 -> 8 + 4 = 12
        bSR = 4 + rec(9) // return 9 -> 4 + 9 = 13

        curr = 6
        

*/

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

function branchSums(root) {
    var sums = [];
    var sum = 0;
    function traverse(curr, sum, sums) {
        if(!curr) return;
        var newSum = sum + curr.value;
        if(curr.left === null && curr.right === null) {
            sums.push(newSum);
            return;
        }

        traverse(curr.left, newSum, sums)
        traverse(curr.right, newSum, sums)
    }
    traverse(root, sum, sums)
    return sums;
}

function DFSPreOrder(tree) {
    var data = [];
    function traverse(node) {
        // data.push(node.value);
        var sum;
        if(node.left === null & node.right === null) return node.value;

        if(node.left) sum = node.value + traverse(node.left);
        if(node.right) sum = node.value + traverse(node.right);
    }
    traverse(tree)
    return data;
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
root.left.right.left = new BinaryTree(10)

console.log(branchSums(root))