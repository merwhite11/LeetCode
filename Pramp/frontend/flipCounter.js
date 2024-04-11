//get

//create a timer that increments with each second

//for every increment, update the innerhtml of digit

//if the digit is greater than 9 --> update left
//then update

const right = document.getElementById('right')
const left = document.getElementById('left')

let counter = 0
setInterval(function() {
  if(counter === 20) {
    counter = 0;
    right.innerHTML = 0;
    left.innerHTML = 0;
  }
  if(counter > 9) splitDigits()
  else right.innerHTML = counter;
  counter ++;
}, 1000);

function splitDigits() {
  const number = counter.toString();
  const splitNumber = number.split('')
  left.innerHTML = splitNumber[0];
  right.innerHTML = splitNumber[1]
}