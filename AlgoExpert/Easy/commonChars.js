/*
input: non empty list of non-empty strings
output: return list of chars that are common to all strings
constraints: strings can be any type of char

strings = ['abc', 'bcd', 'cbaccd']
output: ["b", "c"]

create matches array
go through each el of list
compare the current list element to the next one (loop thru the longer of the 2?)
if there is a match and th, push to list

create matches array
    loop i thru list
        loop j thru list
            if i el is longer than j el -> i el = base, else j el = base 
            loop thru base
                see if shorter contains current char
                    if yes, push to matches


*/

// function commonCharacters(strings) {
//     var matches = [];
//     if(strings.length === 1) {
//         for(let k = 0; k < strings[0].length; k++) {
//             matches.push(strings[k]);
//         }
//         return matches;
//     }
//     if(strings[0].length > strings[1].length) {
//         longer = strings[0]
//         shorter = strings[1]
//     } else {
//         longer = strings[1]
//         shorter = strings[0] 
//     }
//     for(let i = 0; i < longer.length; i++) {
//         if(shorter.includes(longer[i]) && !matches.includes(longer[i])) {
//             matches.push(longer[i])
//     }
//     if(strings.length > 1) {
//         for(let j = 2; j < strings.length; j++) {
//             matches.map((el) => {
//                 if(!strings[j].includes(el)) {
//                     matches = [];
//                     return;
//                 };
//             })
//         }
//     }
//     }
//     return matches;
// }

/*
create storage
loop thru list
    loop thru string
        if char is not in storage, add with value 1 and i value 
        if char is already in storage and the i value does not match
            update i value add 1
loop thru storage
    if char has val that is === length of list -> push to matches
return matches

*/

function commonCharacters(strings) {
    var storage = {};
    var matches = [];
    for(let i = 0; i < strings.length; i++) {
        for(let j = 0; j < strings[i].length; j++) {
            var char = strings[i][j]
            if(!storage[char]) {
                storage[char] = [i, 1];
            }
            else if(storage[char] && i !== storage[char][0]) {
                storage[char][0] = i;
                storage[char][1] ++;
            } 
        }
    }
    console.log(storage)
    for(let val in storage) {
        if(storage[val][1] === strings.length) {
            matches.push(val)
        }
    }
    return matches;
}

var strings = ['abc', 'bcd', 'cbaccd']
console.log(commonCharacters(['&', '!']))