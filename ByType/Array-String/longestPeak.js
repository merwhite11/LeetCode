/*
input: array of int
output: length of longest peak in array
aka what is the max int that has only increasing ints preceding and decreasing succeeding it?
peak: 1, 4, 10, 2
not a peak: 4, 0, 10 // 1, 2, 2, 0 // 1, 2, 3

example:
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
output: 6

counter = 1
i = 1
[1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
                 l  i  r
                 l

 counter = 2
 i = 2
[1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
     p  c  n

counter = 3
i = 3
[1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
       p  c  n

counter = 1
i = 4
[1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
          p  c  n


 *ENTER IF CASE
  [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
               p  c



plan:
create peak var
create peak idx var
counter
maxLength

if(curr >= next) counter = 0
else counter ++

if curr > prev and > next -> store as peak
counter ++
keep goint after peak until next > prev
store as length
counter back to 0

compare curr to prev and next -> if greater than
start counter at 2
peak idx moves to array[i] to hold spot of current peak
go into while loop to count descendings
if arr[i] > prev -> break -> length = counter -> counter back to 0 -> move peak idx one up
store length
else counter ++

*/

function longestPeak(arr) {
  var i = 1;
  var counter = 0;
  var length = 0;


  var curr = arr[i]
  var prev = arr[i-1]
  var next = arr[i+1]

  while(curr > prev && i < arr.length) {
    if(curr > prev && curr > next) {
      prev = curr;
      curr = next;
      if(curr > prev) {
        length = counter;
        counter = 0;
        curr = arr[i]
      }
      i++;
      counter++;
    }
    i++;
    counter++;
  }
  i++;
  counter = 0;
}


function longestPeak(arr) {
  var peaks = [];
  var length = 0;
  for(let i = 1; i < arr.length - 2; i++) {
  var curr = arr[i]
  var prev = arr[i-1]
  var next = arr[i+1]
  if(curr > prev && curr > next) {
    peaks.push(i)
    }
  }
  for(let p in peaks) {
    var idx = peaks[p]
    var left = idx;
    var nextLeft = idx - 1;
    var right = idx;
    var nextRight = idx + 1
    var leftCounter = 1;
    var rightCounter = 0;
    while(arr[left] > arr[nextLeft]) {
      console.log('left', arr[nextLeft], arr[left])
      left = nextLeft;
      nextLeft--;
      leftCounter++;
    }
    while(arr[right] > arr[nextRight]) {

      console.log('right', arr[nextRight], arr[right])
      right = nextRight;
      nextRight++;
      rightCounter++;
    }
    length = Math.max(rightCounter + leftCounter, length)
  }
  return length;

}

//first find all the peaks
//then find the longest

//if you find a val that is greater than prev and next
//store the peak ! index

//how far to left & right can you go with decreasing vals ?

var array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
console.log(longestPeak(array))