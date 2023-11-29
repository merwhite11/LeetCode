/*
input: bst, target int
output: closest value to target in bst

//INSERT -- 

create new node
check if there's a root -> if not new node becomes roote
    if new node > root
        if there's a right, repeat steps
        no right -> new node becomes right val
    if new node < root
        if there's a left, pass in left as new val, repeat
        no left -> new node becomes left val 

//FIND ClOSEST

create object: {diff: 0, value: null}

start at the root - set current
if target is greater than current val 
check diff between target and current.left
    if it's smaller than diff
    update diff
    update closestVal
current becomes current.left

if target is less than root
    if it's smaller than diff
    update diff
    update closestVal
current becomes current.right

*/
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor(){
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value)
        if(!this.root) {
            this.root = newNode;
            return this;
        } 
        var current = this.root;
        while(true) {
            if(value > current.value) {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            } else if(value <= current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            }
        }
    }
    findClosestVal(target) {
        console.log(target)
        var storage = {diff: 0, value: null};
        if(!this.root) return 'no root';
        var current = this.root;
        if(current === null) return 'no root';
        console.log('current', current.value)
        while(true) {
            // if(current.value === target) return current.value;
            var currDiff;
            if(target > current.value) {
                currDiff = target - current.value;
                if(currDiff < storage.diff) {
                    storage.diff = currDiff;
                    storage.value = current.value;
                }
                current = current.right;
            } else {
                currDiff = current.value - target;
                if(currDiff < storage.diff) {
                    storage.diff = currDiff;
                    storage.value = current.value;
                }
                current = current.left;
            }
        }
        console.log(storage)
    }
}

var tree = new BST()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(2)
tree.insert(13)
tree.insert(22)
tree.insert(1)
tree.insert(14)
tree.insert(14)
tree.findClosestVal(12)