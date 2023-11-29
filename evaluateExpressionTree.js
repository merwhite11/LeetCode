/*
input: binary expression tree
output: evaluate tree mathematically, return integer

leaf nodes are operands - positive ints
all other nodes are operators, represented by neg int:
    -1: left subtree + right subtree
    -2: left subtree - right subtree
    -3: left subtree / right subtree
    -4: left subtree * right subtree
keep passing accumulating expression through recursive func

depth first
starting evaluation = null
accumulating expression 
recur traverse function
    
    if left node ->
        var leftNode =
        call trav with node.left and prev node

    if right node -> call trav with node.right

    if no left && no right
        check what parent is 

call function 

return integer


go to bottom of tree 
when you reach a leaf , see what the parent is

evaluation =         4               +                      trav(-3)
            6     -    2                             2
    trav(2)   *    trav(3)
        2     *       3
                


            -1
      -2            -3
   -4      2      8     3
  2   3    

*/

function evaluateExpressionTree(tree) {
    if(tree.value >= 0) return tree.value;
    var left = evaluateExpressionTree(tree.left);
    var right = evaluateExpressionTree(tree.right);
    if(tree.value === -1) return left + right;
    if(tree.value === -2) return left - right;
    if(tree.value === -3) return int(left/right)
    if(tree.value === -4) return left * right;
}
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  } 


var root = new BinaryTree(-1)

root.left = new BinaryTree(-2)
root.right = new BinaryTree(-3)

root.left.left = new BinaryTree(-4)
root.left.right = new BinaryTree(2)
root.right.left = new BinaryTree(8)
root.right.right = new BinaryTree(3)

root.left.left.left = new BinaryTree(2)
root.left.left.right = new BinaryTree(3)

console.log(evaluateExpressionTree(root))