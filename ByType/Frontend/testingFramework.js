/*
implement three functions of basic js testing framework

describe
  defines a test suite of related test cases
  inputs: string 'testSuiteName',
  callback func which makes one or more calls to it

it
  defines a single test case in a test suite
  inputs: string 'testCaseName',
  callback func to make calls to expect

expect
  defines a single check in a test case
  inputs: actual ()
  output: object with 3 functions
    1. expect(actual).toExist()
    //checks whether actual is neither null or undefined
    2. expect(actual).toBe(expected)
    //actual strictly equal to expected
    3. expect(actual).toBe(type)
    checks that actual is of the type 'type'

plan
describe:
print beginning suite string
try
call it with name of test case and callback
  print beginning test case string
  call expect with actual for toExist and toBe
catch
if it throws error -> console.error

it
  try
  call expect with actual for toBeType
  catch
  expect throws error -> throw errorMessage

expect
  return an object with the different functions



*/

//call with function that calls it, when then calls expect
function describe(testSuiteName, func) {
  console.log(`beginning test suite ${testSuiteName}`);
  try {
    func();
    console.log(`successfully completed test suite ${testSuiteName}`);
  }
  catch({testCaseName, errorMessage})
  console.error(
    `failed running test suite ${testSuiteName} on test case ${testCaseName} with error message ${errorMessage}`);
}

//call with function that calls expect methods
function it(testCaseName, func) {
  console.log(`beginning test case ${testCaseName}`);
  try {
    func();
    console.log(`successfully completed test case ${testCaseName}`)
  }
  catch(errorMessage) throw {testCaseName, errorMessage};
}

//returns class so expect = new ExpectFunctions(actual)
function expect(actual) {
  return new ExpectFunctions(actual);
}

class ExpectFunctions {
  constructor(actual) {
    this.actual = actual;
    this.stringified = JSON.stringify(actual);
  }
  toExist() {
    if(this.actual == null) {
      throw `expected value to exist but got ${this.stringified}`;
    }
  }
  toBe(expected) {
    if(this.actual !== expected) {
      throw `expected ${this.stringified} to be ${JSON.stringify(expected)}`;
    }
  }
  toBeType(type) {
    var typeOfActual = typeof this.actual
    if(typeOfActual !== type) {
      throw `expected ${this.stringified} to be of type ${type} but got ${typeOfActual}`
    }
  }
}