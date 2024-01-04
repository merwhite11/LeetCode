/*
input: given a string containing characters (, ), {, }, [, ]
output: valid aka true if
open brackets must be closed by same type
open brackets closed in the correct order
every close bracket has corresponding open bracket
false if not

examples:
s = "()"
output: true

s = "()[]{}"
output: true

s = "(]"
output: false

plan:
stack = last in first out

if string.length % 2 not 0 -> return false
create stack
loop through string
  if ( -> push ) in stack
  if { , push }
  if [, push ]
if it's an opening bracket -> push close to array
if its a closing bracket -> pop from stack -> does pop match current?

walkthru
"()[]{}"
i = 0
stack = [ ')' ]

i = 1
pop -> match
stack = []

i = 2
stack = [ ']' ]

i = 3
pop -> match
stack = []

i = 4
stack = [ '}' ]

i = 5
pop -> match
stack = []

*/

var isValid = function(s) {
  if(s.length % 2 !== 0) return false;
  var stack = [];
  for(let char in s) {
    if(s[char] === '(') stack.push(')');
    else if(s[char] === '{') stack.push('}');
    else if(s[char] === '[') stack.push(']');
    else {
      var close = stack.pop();
      if(s[char] !== close) return false;
    }
  }
  if(stack.length === 0) return true;
  else return false;
   console.log(stack)
};

var s = "((";
console.log(isValid(s))