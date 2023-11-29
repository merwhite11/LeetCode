/*
input: array of objects
        deadline field -> number of days left to complete job
        payment -> profit for completing job
output: max profit that can be obtained in seven days
conditions: each job takes 1 day to complete
            can only work on 1 job at a time
            don't have to do all the jobs

deadlines added up need to be <= 7
can't have 2 deadlines equal 

sort array so highest payments are first
while days 

[
    {"deadline": 1, "payment":1}
    {"deadline": 2, "payment":1}
    {"deadline": 2, "payment":2}
    {"deadline": 3, "payment":1}
    {"deadline": 2, "payment":4}
]

[
    {"deadline": 2, "payment":4}
    {"deadline": 2, "payment":2}
    {"deadline": 1, "payment":1}
    {"deadline": 2, "payment":1}
    {"deadline": 3, "payment":1}
]
if deadline < index + 1 -> skip task
[4 ] [2 ] [1 ] [ ] [ ] [ ] [ ]

sort array so highest payments first
create empty arry for payments (index is the days)
create days used = 0;
create totalPay = 0;
loop through array
    if daysUsed >= 7 break;
    if deadline >= days used + 1
      totalPay += payment
      daysUsed ++;  
*/
function sort(arr) {
    for(let i = arr.length; i >= 0; i--) {
        var noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            var curr = arr[j];
            var next = arr[j+1]
            if(curr["deadline"] > next["deadline"]) {
                var noSwaps = false;
                arr[j+1] = arr[j];
                arr[j] = next;
            }
        }
        if(noSwaps) break;
    }
    console.log(arr)
    return arr;
}
//3 + 2 + 2 + 1
// function optimalFreelancing(jobs) {
//     jobs = sort(jobs);
//     var daysUsed = 0;
//     var totalPay = 0;
//     for(let i = 0; i < jobs.length; i++) {
//         if(daysUsed >= 7) break;
//         var curr = jobs[i];
//         var next = jobs[i+1]
//         var deadline = curr["deadline"];
//         //find highest pay for same deadline
//         while(curr) {
//             //if next deadline === curr deadline
//             //pick task w max payment
//         }
//         if(curr["deadline"] > daysUsed) {
//             totalPay += curr["payment"];
//             daysUsed ++;
//         }
//     }
//     return totalPay;
//   }

  function optimalFreelancing(jobs) {
    jobs = sort(jobs);
    var daysUsed = 0;
    var totalPay = 0;
    var i = 0
    while(daysUsed <= 7) {
        var curr = jobs[i];
        var next = jobs[i+1]
        var highest = 0; 
        while(curr["deadline"] === next["deadline"]) {
            if(curr["payment"] > next["payment"]) {
                highest = curr["payment"];
            } else {
                highest = next["payment"]
            }
            i++
        }
        if(curr["deadline"] > daysUsed) {
            totalPay += curr["payment"];
            daysUsed ++;
            i ++;
        }
    }
    return totalPay;
    }

var jobs = [
    {"deadline": 8, "payment":3},
    {"deadline": 1, "payment":1},
    {"deadline": 1, "payment":2}
    // {"deadline": 2, "payment":5},
    // {"deadline": 2, "payment":3},
]

var jobs2 = [
    {
      "deadline": 2,
      "payment": 2
    },
    {
      "deadline": 4,
      "payment": 3
    },
    {
      "deadline": 5,
      "payment": 1
    },
    {
      "deadline": 7,
      "payment": 2
    },
    {
      "deadline": 3,
      "payment": 1
    },
    {
      "deadline": 3,
      "payment": 2
    },
    {
      "deadline": 1,
      "payment": 3
    }
  ]

console.log(optimalFreelancing(jobs2))