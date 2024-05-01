/*
input: array of arrays sorted in ascending order by timestamp
idx 0: timestamp
idx 1: count of visitors
idx2: 0 for exit, 1 for entrance

time given in numb of secs -> Epoch format

output: time at which mall had most visitors -> timestamp in epoch format

edge: if more than one busiest, return earliest

//example
data = [  [1487799425, 14, 1],
          [1487799425, 4,  0],
          [1487799425, 2,  0],
          [1487800378, 10, 1],
          [1487801478, 18, 0],
          [1487801478, 18, 1],
          [1487901013, 1,  0],
          [1487901211, 7,  1],
          [1487901211, 7,  0]
        ]

walk-thru
end of
    11: 7
    13: 1
    478: 0
    378: 10
    25: 8

plan:
create highest so far var = 0

i = length - 1
j = length - 2

calcTotal (data, total)
   if exit -> data[1] * -1
    else data[1]
return visitors

let total = 0;
loop from i to 0
  j = i - 1
  let highest = [0, 0]
    total += calcTotal(data)
    while arr[i][1] === arr[j][1] and j >= 0
      total += calcTotal(next)
      j--
    if total > highest[0] -> highest = [total, arr[i][1]]
    i = j

i = 8
j = 7
total = -7
total = 0
j = 6
highest = 0

i = 6
j = 5
total = -1
highest = 0

i = 5
j = 4
total = 18
total = 0
j = 3
highest = 0

i = 3
j = 2
total = 10
highest = [10, 378]

i = 2
j = 1
total = 8
total = 2
j = 0
total = 14

*/

function calcTotal(data) {
  console.log(data)
  return data[2] === 0 ? data[1] * -1 : data[1]
}

function findBusiestPeriod(data) {
  let highest = [0, 0]
  let total = 0;
  for(let i = 0; i < data.length; i++) {
    let j = i + 1;
    total += calcTotal(data[i])
    console.log('first total', total)
    if (j < data.length && data[i][0] === data[j][0]) {
      continue;
    }
    if(total >= highest[0]) highest = [total, data[i][0]]
  }
  return highest[1];
}


/*
function findBusiestPeriod(data) {
  var highest = {timestamp: null, visitors: 0};
  var acc = 0;
  for(let i = 0; i < data.length; i++) {
    var curr = data[i];

    if(curr[2] === 1) acc += curr[1];
    else if(curr[2] == 0) acc -= curr[1];

    if( i < data.length - 1 && data[i][0] == data[i+1][0] && acc < highest.visitors){
      continue;
    }

      if(acc > highest.visitors) {
        highest.timestamp = curr[0];
        highest.visitors = acc
      }

  }
  return highest.timestamp
}
*/
var dataPoints =
[[1487799425,14,1],[1487799425,4,0],[1487799425,2,0],[1487800378,10,1],[1487801478,18,0],[1487801478,18,1],[1487901013,1,0],[1487901211,7,1],[1487901211,7,0]]

console.log('result', findBusiestPeriod(dataPoints))
