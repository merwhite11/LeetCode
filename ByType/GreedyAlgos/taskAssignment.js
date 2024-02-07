/*
input: int k repping num of workers // arr of pos ints repping duration of tasks to complete
//each worker must complete 2 unique tasks
//can only work on one task at a time
//number of tasks will always be 2k aka double the num of workers
//time to complete all taks = time to complete longest pair of tasks

output: optimal assignment of tasks to each worker for min completion time
//list of pairs : [task1, task2]

//example
k = 3
tasks = [3, 1, 5, 1, 3, 4] // [1, 1, 3, 3, 4, 5]

output: [
  [0, 2],
  [4, 5],
  [1, 3]
]

[1, 1, 2, 3, 4, 5]

//plan:
map thru arr to create an arr of obs with each el paired w index
sort the object arr by value
formattedTasks.sort((a, b) => a.value - b.value)

map the area to create an object with key as el and value as kindex

*/

function taskAssignment(k, tasks) {
  indexedTasks = tasks.map((value, index) => ({value, index}));
  indexedTasks.sort((a, b) => a.value - b.value);
  console.log('sorted', indexedTasks)
  const res = [];
  let start = 0, end = indexedTasks.length - 1;
  while(start <= end) {
    res.push([indexedTasks[start].index, indexedTasks[end].index]);
    start++;
    end--;
  }
  return res;
}


var tasks = [1, 3, 5, 3, 1, 4]
var k = 3;

console.log(taskAssignment(k, tasks))