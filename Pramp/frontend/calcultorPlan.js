/*
//Functional Reqs
Button 0-9
4 operators
2 buttons for decimal and reset
= button

//Structural Reqs

//Operators
a button for + - % *
click handler attached to each div
passes operator as string when clicked

//Decimals
a button that displays a '.'
passes value of '.' when clicked

// add button to reset everything

//Numbers
loop thru numbers 0 -9
for each num
make a button that displays num AND stores value
click handler attached to each number, passes value when clicked

//Display
a div that displays the value from calculation function-- template literal

//User Story
4+2
= evaluate the expression --> call calculate funciton with input from display
update display with return value of calculate function
clear button clicked
set display innerHTML back to empty string

// 1 + 2
// 1 + 2
// 1 . 2 + 2 . 3 -> 1.2 + 2.3

//Calculation / click events
takes in a string (innerhTml of the display div on click of =)
make string into an array, split on operator ('1 + 2') --> 1 + 2

func : str => expression
const sum = 1 + 2
stack    [1, '+', 2]

plan:
first build buttons
add click handlers
send input from click to calculation function
return output -> display output


//
*/