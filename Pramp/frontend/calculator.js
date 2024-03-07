//define all the operations in an object with key 'operator string' and value operator function that takes in two ints
const operations = {
  "/":(a,b) => a/b,
  "x":(a,b) => a*b,
  "-":(a,b) => a-b,
  "+":(a,b) => parseFloat(a)+parseFloat(b) //need parse float otherwise will concat
}

const operatorChars = Object.keys(operations)
const numbers = document.querySelectorAll('.numbers div');
const operators = document.querySelectorAll('.operators div')
const display = document.querySelector('.display')
const result = document.getElementById('#equal')
const clear = document.getElementById('#clear');

//number click handler
const numberClickHandler = (numStr) => {
//store click as current string - grab from input div
let currString = input.innerHTML;
let lastChar = currString[currString.length - 1];

//= has not yet been clicked, resultDisplayed=false, add on to input string
if(resultDisplayed === false) {
  input.innerHTML += numStr;

  //if result is displayed and last char was an operator
} else if (resultDisplayed === true && operatorChars.includes(lastChar)) {
  resultDisplayed = false;
  input.innerHTML += numStr
  //if result is displayed and & lastchar is a number
} else {
  resultDisplayed = false;
  input.innerHTML = numStr
}

}

//add click handler for numbers buttons
numbers.forEach(number => number.addEventListener('click', () => {
      console.log('buttonvalue', number.innerHTML)
      numberClickHandler(number.innerHTML)
    }))