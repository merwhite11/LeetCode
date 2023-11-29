/*
input: non empty array of pos integers representing query durations. only 1 query at a time, in any order
query wait time = amt of time that it must wait before its execution starts. (sum of prev query durations)
output: min amt of total wait time for queries

[3, 2, 1, 2, 6] -> 0 + 3 + 5 + 8 + 2 = 20
17


bubble sort array low -> hight
create sum var = 0
create index var  1
loop i thru array
curr = 2
index = 1
for(let j = index - 1; j >= 0; j--)
sum += arr[j - 1]

1, 2, 2, 3, 6 -> 0 + 1 + 3 + 5 + 8 = 17

0 + 1 + 3 + 5 + 8

i = 1 //0
    j = 0
    sum =+ 1

i = 2 //1 
    j = 1 
        sum += 2 = 3
    j = 0
        sum += 1 = 4
i = 3 //4
    j = 2
        sum += 2 = 6
    j = 1
        sum += 2 = 8
    j = 0
        sum += 1 = 9
i = 4
    j = 3
        sum += 3 = 12
    j = 2
        sum += 2 = 14
    j = 1
        sum +=2 = 16
    j = 0
        sum += 1 = 17
    sum += 5 + 3 = 8


*/

function bubbleSort(arr) {
    //outer loop starts from end, goes down
    for(let i = arr.length; i > 0; i--) {
        //set noswaps var to true
        var noSwaps = true;
        //inner loop starts at 0, goes to one below i, goes up
        for(let j = 0; j < i - 1; j++) {
            //if curr j > next j -> SWAP -> set noSwaps to false
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        //if it goes through whole j loop w noswaps break
        if(noSwaps) break;
    }
    //return array
    console.log('called', arr)
    return arr;
}

function minimumWaitingTime(queries) {
    queries = bubbleSort(queries);
    console.log(queries)
    var sum = 0;
    for(let i = 1; i < queries.length; i++) {
       for(let j = i - 1; j >= 0; j--) {
        sum += queries[j]
       }
    }
    return sum;
  }

  console.log(minimumWaitingTime([1, 1, 1, 4, 5, 6, 8, 1, 1, 2, 1]))