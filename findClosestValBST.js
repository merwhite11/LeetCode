function findClosestVal(tree, target) {
    var storage = {diff: null, value: null};
    var current = tree;
    while(current) {
        if(current.value === target) return current.value;
        var currDiff;
        if(target > current.value) {
            currDiff = target - current.value;
            if(storage.diff === null) storage.diff = currDiff;
            if(currDiff < storage.diff) {
                storage.diff = currDiff;
                storage.value = current.value;
            }
            current = current.right;
        } else if(target < current.value) {
            currDiff = current.value - target;
            if(storage.diff === null) storage.diff = currDiff;
            if(currDiff < storage.diff) {
                storage.diff = currDiff;
                storage.value = current.value;
            }
            current = current.left;
        }
    }
    return storage.value;
}

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
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

console.log(findClosestVal(root, 12))