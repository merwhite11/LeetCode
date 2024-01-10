/*
create EventTarget class with methods
//addEventListener
  //input: name of event as string, callback function to be called when event is dispatched to target
  //target should be able to have multiple event listeneres for same event
  eg. target.addEventListener('click', onClick)
      target.addEventListener('click', onClick1)

//removeEventListener
  input: name of event as string, callback function to be called when event is dispatched to target
  removes the relevant event listener
  eg. target.removeEventListener('click', onClick) should undo effects of addEventListener
  //if no current event listener for the args, removeEventListener has no effect
  //if 2 diff callbacks added for same event, removing listener from one event shouldn't affect other
  eg. click event removed from onClick, should not affect onClick1 click event

//dispatchEvent
input: name of event as string
//if no event listeners -> no affect
//if event listeners -> dispatchEvent invokes callback functions of event listeners
eg. dispatchEvent('click') -> calls onClick
//can be invoked multiple times
//2 event targets w same event listener -> dispatch event to one target w/out triggering the other target

event.events = {
  click: [onClick1, onClick2..],
  hello: [logHello],
  world: [logWorld]
}


addEventListener
callbacks
logHello = () => console.log('hello')
logWorld = () => console.log('world')

makes it so when you call dispatch on an event with the name, it knows which callback func to call

dispatch

*/

// class EventTarget {
//   constructor() {
//     this.events = {}
//   }
//   addEventListener(name, callback) {
//     //check if event name is already in obj
//     //if it is , check if its array already includes the callback
//       //if event exists, but callback not in arr -> push to arr
//       //if event exists and callback is already in array -> nothing
//     //if event name is not in object, instantiate new set

//     if (this.events[name]) {
//       if (!this.events[name].has(callback)) {
//         this.events[name].add(callback)
//       }
//     }
//     else this.events[name] = new Set().add(callback)
//   }
//   removeEventListener(name, callback) {
//     if (this.events[name] && this.events[name].has(callback)) this.events[name].delete(callback)
//   }

//   dispatchEvent(name) {
//     if (this.events[name]) {
//       this.events[name].forEach(callback => callback())
//     }
//   }
// }

//optimized

class EventTarget {
  constructor() {
    this.events = new Map()
  }

  addEventListener(name, callback) {
    if(!this.events.has(name)) this.events.set(name, new Set());
    this.events.get(name).add(callback);
  }
  removeEventListener(name, callback) {
    this.events.get(name)?.delete(callback);
  }
  dispatchEvent(name) {
    this.events.get(name)?.forEach(callback => callback());
  }
}
logHello = () => console.log('hello')
logHello1 = () => console.log('hello1')
logHello2 = () => console.log('hello2')
logHello3 = () => console.log('hello3')
logWorld = () => console.log('world')
const target = new EventTarget();

target.addEventListener('hello', logHello);
target.addEventListener('hello', logHello1);
target.addEventListener('hello', logHello2);
target.addEventListener('world', logWorld);
// target.dispatchEvent('hello')
// target.dispatchEvent('world')
target.removeEventListener('hello', logHello)
target.dispatchEvent('hello')
// target.dispatchEvent('world')
// target.removeEventListener('job')
console.log(target.events)