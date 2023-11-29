/*
output: reverse of string
input: string

PLAN:

awesome

split make into array
store a as start var
firstletter = slice 'a'
push to end of array
call reverse with new pushed onto array



*/

function reverse(str) {
    if (str.length <=1) return str;
    return reverse(str.slice(1)) + str[0]
}

console.log(reverse('great'))

/*

reverse(reat) + g
reverse(eat) + r
reverse at + e
reverse(t) + a
taerg



*/