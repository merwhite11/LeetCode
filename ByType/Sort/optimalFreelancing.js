/*
 input: arr of objs
 key deadline: val number days left to complete
 key payment: val money amount
output: max payment possible in 7 day period

 don't have to complete all jobs
 only one job at a time

example:

jobs = [
  {"deadline": 1, "payment": 1},
  {"deadline": 2, "payment": 2},
  {"deadline": 2, "payment": 2}
]

plan:
create array of booleans : f if available, t if used
set total payment to 0

sort the jobs in order of payment

loop i thru jobs
iteratre from the deadline all the way to beginning
when you find a free slot, insert, switch slot to T
add to payment


d:1, p:2
d:1 , p: 1
d: 8, p: 2

*/
function sort(arr) {
  for(let i = 0; i < arr.length; i++) {
    var curr = arr[i];
    for(let j = i -1; j >= 0; j--) {
      if(arr[j].payment < curr.payment) {
        var idx = arr.indexOf(curr);
        var temp = arr[idx];
        arr[idx] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function optimalFreelancing(jobs) {
 let totalPay = 0;
 let slots = [false, false, false, false, false, false, false];

jobs = sort(jobs)

for(let job in jobs) {
  var curr = jobs[job]
  console.log('curr', curr)
  for(let i = curr.deadline - 1; i >= 0; i--) {
    if(slots[i] === false) {
      slots[i] = true;
      totalPay += curr.payment;
      console.log(job, totalPay)
      break;
    }
  }
}
return totalPay
}
var jobs =
[
  {"deadline": 2, "payment": 2},
  {"deadline": 1, "payment": 1},
  {"deadline": 2, "payment": 1}
]
console.log(optimalFreelancing(jobs))