/*
input: value
output: flattened version

flattend:
prim values left unchanged
nested arrs brought up to top level arr
nested objs have all k:v pairs in top level obj
  some keys removed when brought to top
  any associated val fine for repeated keys
flatten arrs nested in objs
flatten objs nested in arrs

examples:
var input1 = [1, 2, [3, 4, [], 5]]
output: [1, 2, 3, 4, 5]

var input2 = {
  a: null,
  b: undefined,
  c: {
    d: true,
    e: 4,
    f: {},
    g: {
      h: 5
    },
  },
}
output: {a: null, b: undefined, d: true, e: 4, h:5}

var input3 = [1, 2, [3], {
  a: 4,
  b: {
    c: 5,
    d: [6, 7, [8, 9, [10]]],
  }
}]
output: [1, 2, 3, {a: 4, c: 5, d: [6, 7, 8, 9, 10]}]

plan:

is input arr -> result = []
is input an obj -> result = {}
is inpur a prim -> return input

recursively iterate through arr or obj
base case: if the curr el is primitive -> push to array or add key to obj

recursive takes in curr and accumulative
  is curr an arr?
    loop thru the curr
      if curr.length === 0 -> continue
      if el is a primitive -> push to acc [1, 2, 3, 4]
      if el is an arr -> call recursive on curr ([1, 2, 3, 4], )
    return acc
  is curr an obj?
    loop thru the obj
      if empty obj -> continue
      if value at curr key is a primitive -> add to acc
      if curr is an obj -> call recursive on curr ({a: 4, b:{...}})


call with input
*/

function drillArr(arr) {
  return arr.reduce((acc, curr) => acc.concat(flatten(curr)), []);
  //   for(let el in arr) {
  //     var curr = arr[el];
  //     if(curr.length === 0) continue;
  //     if(typeof curr !== 'object') acc.push(curr);
  //     if (Array.isArray(value)) drillArr(curr, acc)
  //     else flatten(curr, acc.push[{}]) //({a:...}, [1, 2, 3])
  //   }
  // return acc;
}
function drillObj(obj) {
  const flattenedObj = {};
  for(const [key, value] of Object.entries(obj)) {
    //val is an object
    const valIsObject =
      typeof value === 'object' && value !== null && !Array.isArray(value);
    const flattenedValue = flatten(value)

    //not an object
    if(valueisObject) {
      //copy all kv pairs from flattenedValue to flattenedObj
      Object.assign(flattenedObj, flattenedValue)
    } else {
      flattenedObj[key] = flattenedValue
    }
  }
  return flattenedObj
  // for(let key in obj) {
  //   var curr = obj[key];
  //   var last = acc[acc.length - 1]
  //   console.log('curr', curr)
  //   console.log('acc', acc)
  //   if(typeof curr !== 'object' || !curr) last[key] = curr;
  //   if(curr && Object.keys(curr).length === 0) continue;
  //   if(Array.isArray(curr)) flatten(curr, acc[curr] = [])
  //   else flatten(curr, acc) // {b: {}, }
  // }
  // return acc;
}
function flatten(value, acc) {
  //check for primitive or null val
  if(typeof value !== 'object' || value === null) return value;

  //check for array
  if(Array.isArray(value)) return drillArr(value)
  return drillObj(value)
}





var input3 = [1, 2, [3], {
  a: 4,
  b: {
    c: 5,
    d: [6, 7, [8, 9, [10]]],
  }
}]
var input2 = {
  a: null,
  b: undefined,
  c: {
    d: true,
    e: 4,
    f: {},
    g: {
      h: 5
    },
  },
}
var input1 = [1, 2, [3, 4, [], 5]]
console.log(flatten(input3))
