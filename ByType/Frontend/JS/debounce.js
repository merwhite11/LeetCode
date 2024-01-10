/*
write debounce function
input: callback func, delay in ms, opt immediate boolean which defaults to false.
output: debounced version of the callback func, takes in same params as the cb
when callback is executed it should call the cb after delay ms have passed since the last call to debounced func.

calling debounced func w delay of 3000ms every second would never call underlying callback
delay of 3s would never elapse since last call -- resets to 3 ms with every call

if immediate is true: first call to debounced immediately executes callback
callback shouldn't be able to execute again until 3s after initial call

debounce(callback, delay)
return callback with delay built in

plan:
return transformed version of callback function , should not call callback


if immediate is true the debounce func calls the cb immediately
set to false

if false, need to call setTimeout which takes in cb and ms

create a timerId to be saved between calls to return func

how to pass args to cb function in return func
  use rest param and args kw for unknown args
  then replace cb w arrow function so you can pass the args

how to keep the binding to this -> setTimeout executes in a new context, this keyword will point to global object instead of object debounce was called on
  use apply method on callback, pass in this keyword
  don't use arrow function for debounc function -> will bind callback to this context of debounce -> needs standard func
  don't need to spread args, apply takes them is as an arr
*/


function debounce(callback, delay, immediate = false) {
  //creates closer so every call has same timerID
  let timerID;
  return function(...args) {
    //reset delay on subsequent calls. stops timer from running. does not set timerid to null
    clearTimeout(timerID)

    //check if associated timeout is still running
    const callImmediately = timerID == null && immediate;
    if(callImmediately) {
      callback.apply(this, args);
    }
    timerID = setTimeout(()=> {
      if(!immediate) {
        callback.apply(this, args)
      }
      //set to timerid to null to indicate you're done waiting for cb execution
      timerID = null;
    }, delay)
  }
}
const callback = () => console.log('hello')
const object = {};
object.debounced = debounce(callback, 3000, true);
// function debounce(callback, delay, immediate = false) {
//   if(immediate) {
//     const execute = () => callback()
//     return execute;
//     immediate = false;
//   } else {
//     const delayExecute = () => this.setTimeout(callback, delay)
//     return delayExecute;
//   }
// }
object.debounced()