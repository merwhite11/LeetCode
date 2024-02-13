/*
build MinHeap class that supports an input array of ints
inserts ints into heap
removes heap's min
peeks at the heap's min
bubbleUp for inserting
sinkDown for removing

var arr = [48, 12, 24, 7, 8]

buildHeap
  takes in arr
  calls insert on each el

insert
  push new val to end of arr
  call bubbleUp

bubbleUp
  sets currIdx at last
  sets currVal to last
  loops while currIdx > 0
    create parentIdx
    create parentVal
    if currVal > parentVal -> break
    otherwise swap
    set currIdx to parentIdx

remove
  pop off the lastEl
  store the firstEl
  if there are more values in the heap
    assign idx0 to last el
    call sinkDown
  return firstEl

sinkDown
  store first idx as currVal (prev lastEl)
  store length
  set currIdx to 0
  while currIdx < length
    set leftIdx
    set rightIdx
    define left, right children
    set swap to null

    if leftIdx < length
      set leftChild
      set swap to leftIdx

    if rightIdx < length
      set rightChild
      if right child is less than leftIdx and element
      or if right child is less than leftChild
        set swap to rightIdx

    if no swap -> both r & left are greater than curr
    set arr at currIdx to swap val
    set swap to currVal
    update currIdx to be swap


*/

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  buildHeap(array) {
    this.heap = [];
    return array.forEach(el => {
      this.heap.push(el)
      this.siftUp()
    })
  };

  insert(val) {
    this.heap.push(val);
    this.siftUp(this.heap.length - 1, this.heap)
  }

  siftUp() {
    if(this.heap.length === 1) return;
    let currIdx = this.heap.length - 1
    let currVal = this.heap[currIdx]
    while(currIdx > 0) {
      let parentIdx = Math.floor((currIdx - 1)/2);
      let parentVal = this.heap[parentIdx];
      if(currVal > parentVal) break;
      this.heap[currIdx] = parentVal;
      this.heap[parentIdx] = currVal;
      currIdx = parentIdx;
    }
    return this.heap;
  }

  peek() {
    re
  }
};

var arr = [48, 12, 24, 7, 8]
const heap = new MinHeap(arr)
console.log(heap)
// heap.insert(6)