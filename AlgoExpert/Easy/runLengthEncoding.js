/*
input: non-empty string of numbers and letters 
output: run-length encoded string -> <NumberOfRepsofChar><Char> 
constraints: if run is > 10, must be broken up. Only Number directly preceding
letter signifies reps. 12A -> 9A3A

string = "AAAAAAAAAAAAABBCCCCDD"
output: "9A4A2B4C2D"
if j > 9
    counter === 0

create result string ''
loop i thru string
    j = i + 1
    while curr is === next
        if j === 9
            result concat counter, curr
            counter === 0
        counter ++
        j++
    result concat counter, curr

*/

// function runLengthEncoding(string) {
//     var result = '';
//     string = string.split('');
//     console.log(string)
//     var i = 0
//     // var j = i + 1;
//     var count = 0;
//     while(string[i] === string[i+1]) {
//         if(count === 9) {
//             result = result.concat(count, string[i]);
//             count = 0;
//         }
//         count ++;
//         i ++
//     }
//     console.log('j', string[i])
//     result = result.concat(count, string[i]);
//     count = 0;
//     i++;
//     return result;
//   }

// function runLengthEncoding(string) {
//     var result = [];
//     string = string.split('');
//     var count = 1
//     for(let i = 1; i < string.length; i++) {
//         if(string[i] !== string[i-1] || count === 9) {
//             result.push(count, string[i])
//             count = 0;
//         } 
//         count++;
//     }
//     result.push(count, string[string.length - 1]);
//     // result.push(string[string.length - 1])
//     return result.join('');
// }

function runLengthEncoding(string) {
    var result = '';
    string = string.split('');
    var count = 1;
    for(let i = 1; i < string.length; i++) {
        if(string[i] !== string[i-1] || count === 9) {
            console.log(count, string[i])
            result = result.concat(count, string[i]);
            count=0;
        } 
        count++;
    }
    console.log('count', count)
    console.log('end count', count)
    result = result.concat(count, string[string.length-1])
    return result;
}

var string = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
var string2 = "AAAAAAAAAAAAABBCCCCDD"
console.log(runLengthEncoding(string))