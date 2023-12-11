/*
input: non-empty sorted array of distinct ints, constructs bst from ints
output: root of the bst

example: [1, 2, 5, 7, 10, 13, 14, 15, 22]

midIdx = array.length /2
curr = new BST (10)
get left mid idx -> midx - 1 / 2
get right mid idx -> midx + 1 /2
if left idx === idx return
curr.left = call insert on left mid
curr.right = call insert on right mid

call min with curr.left val
call min with curr.right val


plan:
find the mid point of the arr , set as root
length / 2 math.ceil

left tree: 0 -> mid - 1
right tree: mid + 1 -> end

if tree.length <= 1 -> return;

curr = root  // 10
[1, 2, 5, 7]
get mid of left tree, set as curr.left
set curr.left as curr

  curr = root.left // 2
  left tree = [1] -> LEAF -> insert root.left.left
  right tree = [5, 7]

    curr = root.left.right // 5
    left tree = null -> return
    right tree = [7] -> insert root.left.right.right

[13, 14, 15, 22]
get mid of right tree, set as curr.right
set curr.right as curr

  curr = root.right // 14
  left tree = [13] -> LEAF -> insert root.right.left
  right tree = [15, 22] call build([15, 22])

[1, 2, 5, 7, 10, 13, 14, 15, 22] // l = 0 // r = 8
mid val = 10 //idx = 4
curr = new BST(10)
//LEFT
curr.left(array, 0, 3)
  mid val = 2 // idx = 1
  curr = new BST (2)

    curr.left = (array, 0, 1)
      mid val = 1 //idx = 0
      curr = new BST(1)

        curr.left(array, 0, -1)
        RETURN NULL

    curr.right = (array, 2, 3)
      mid val = 5 // idx = 2
      curr = new BST(5)

        curr.left(array, 2, 1)
        RETURN NULL

        curr.right(array, 3, 3)
          mid val = 7 //idx = 3
          curr = new BST (7)

            curr.left(array, 3, 2)
            RETURN NULL

            curr.right(array, 4, 3)
            RETURN NULL

//RIGHT
curr.right





*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
function minHeightBst(array, left = 0, right = array.length-1) {
  if(left > right) return null;
  var midIdx = Math.floor((left + right)/2);
  var curr = new BST(array[midIdx]);
  console.log('midIdx', array[midIdx])

  curr.left = minHeightBst(array, left, midIdx - 1);
  curr.right = minHeightBst(array, midIdx + 1, right);





}

var array = [1, 2, 5, 7, 10, 13, 14, 15, 22]
console.log(minHeightBst(array))
