/*
complete binary tree:
  2nd last level completely filled
almost complete b tree:
  leaves should be present only at the last and 2nd last level
  leaves at same level filled from left to right

heap data structure
  tree-based
  complete tree (2nd to last level filled, leaf level left to right fill)
  min and max types

max heap
  complete binary tree
  root is maximum
  parents always greater than children

min heap
  complete binary tree
  root is minimum
  parents always smaller than children

heap as array:
  given child, find parent:
    Math.floor((n-1)/2)

  given parent, find child:
    left child: 2n + 1
    right child: 2n + 2

INSERT TO MAXHEAP

add to the end -> push onto list
bubble up

bubble up
  curr val = new inserted val
  curr idx = last idx
  find parent idx =(2*currIdx) + 1
  parent = arr[parentIdx]
  if currVal > parentVal -> swap
  set curridx to parentIdx

EXTRACT MAX
  pop off from front of arr
  grab smallest leaf from bottom -> place as root
  percolate down root
    if root is smaller than child -> swap with larger of children



*/

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let currIdx = this.values.length - 1;
    const currVal = this.values[currIdx];
    while(currIdx > 0) {
      let parentIdx = Math.floor((currIdx - 1)/2);
      let parent = this.values[parentIdx];
      console.log(currVal, parent)
      if(currVal < parent) break;
      this.values[parentIdx] = currVal;
      this.values[currIdx] = parent;
      currIdx = parentIdx;
    }
  }

  sinkDown() {
    const currVal = this.values[0];
    const length = this.values.length
    let currIdx = 0;
    while(currIdx < length) {
      let leftIdx = (2*currIdx) + 1;
      let rightIdx = (2*currIdx) + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftIdx < length) {
        leftChild = this.values[leftIdx];
        swap = leftIdx
      }

      if(rightIdx < length) {
        rightChild = this.values[rightIdx];
        if(
          (!swap && rightChild > currVal ||
            swap && rightChild > leftChild)
          ) {
            swap = rightIdx
          };
        }

        if(!swap) break;
        this.values[currIdx] = this.values[swap];
        this.values[swap] = currVal;
        currIdx = swap;
      }
    }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
}
  remove() {
    var lastEl = this.values.pop();
    const firstEl = this.values[0];
    if(this.values.length > 0) {
      this.values[0] = lastEl;
      this.sinkDown()
    }
    return firstEl;
  }
}
var heap = new MaxBinaryHeap()
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values)
console.log('removed', heap.remove())
console.log('removed', heap.remove())
console.log('removed', heap.remove())
console.log('removed', heap.remove())
console.log('removed', heap.remove())
console.log('removed', heap.remove())
console.log('removed', heap.remove())
console.log(heap.values)