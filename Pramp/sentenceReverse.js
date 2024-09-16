/*
input: arr of chars, sequences of chars separated by space chars
each space represents end of word

output: reverses order of words in arr

examples:
arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
        'm', 'a', 'k', 'e', 's', '  ',
        'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output:
[ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]


//english:
take the last word, put it at the front of a new list, get the second to last word, make it the second of the list...
keep doing that til you're at the first word

//brute force
space: O(n) --> O(1) --> inplace
time: O(n)

plan/walk-thru:

reverse everything
['t', 'c', 'e', 'f', 'r', 'e', 'p', ' ',
's', 'e', 'k', 'a', 'm', ' ',
'e', 'c', 'i', 't', 'c', 'a', 'r', 'p']

//i = 0
ws = 0
reverse(0, 8)
['e', 'c', 'i', 't', 'c', 'a', 'r', 'p']

looping from end of array
lastChar pointer = length - 1 //21
firstChar pointer = spaceIndex + 1 //15

plan:
//helper function
swap(arr) {
    for (let i = 0; i < arr.length; i++)
    right = i
    left = (length - 1) - i
    let temp = arr[right]
    arr[right] = arr[left]
    arr[left] = temp
}

let allReversed = swap(arr)
loop thru allReversed
    right = 0
    left = length - 1
    while(right < left)
        if curr = space -> swap(arr.slice(right, left) )
        right++
        left--

*/

function reverse(arr, start = 0, end = arr.length - 1) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function reverseWords(arr) {
  reverse(arr);
  console.log('reversed', arr)
  let wordStart = 0
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length || arr[i] === '  ') {
      reverse(arr, wordStart, i - 1)
      wordStart = i + 1;
    }
  }
  console.log('arr', arr)
  return arr;
}

// debug your code below
const arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e'];

console.log(reverseWords(arr));