/*
input: arr with els at most k away from their sorted position
output: sorted arr

var arr = [6, 5, 3, 2, 8, 10, 9]
var k = 3



*/
class MinHeap {
  constructor() {
    this.heap = [];
  }


  heapify(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i])
    }
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      //math to correlate array with tree position
      const parentIndex = Math.floor((index - 1) / 2);
      //if child is less than parent
      if (this.heap[index] < this.heap[parentIndex]) {
        //swap parent and child
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        //set index to parent index
        index = parentIndex
      } else {
        break;
      }
    }
  }
     remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapify(this.heap);
        return item;
    }
}
function sortKMessedArray(arr, k) {
  const n = arr.length;
  let h = new MinHeap();
  //insert k + 1 els
  for(let i = 0; i < k + 1; i++) {
    h.insert(arr[i])
  }
  h.remove()
}

var arr = [6, 5, 3, 2, 8, 10, 9]
var k = 3
sortKMessedArray(arr, k)
// const minHeap = new MinHeap();
// minHeap.heapify(arr);
// console.log(minHeap.heap)

/*
create a minHeap to keep track of min el in the heap -> stored in root
get first k+ 1 els into min heap


*/