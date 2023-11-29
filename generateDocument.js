/*
input: string of available chars and string repping doc to generate
output: true if you can generate the doc with chars, false if not
constraints: need frequency of chars available to match frequence of chars needed in doc for true
            may contain any chars

chars = "Bste!hetsi ogEAxepelrt x "
doc = "AlgoExpert is the Best"

create a storage object
loop thru chars of doc 
    if char is not already in the map
        add to map w value 1
    else add 1 to value

loop thru avail
    if letter exists in storage
        substract 1

by the end all the chars in storage should have value 0
loop thru storage
    if there is a value that's not 0, return false


*/

function generateDocument(characters, document) {
    var storage = {};
    for(let k in document) {
        var char = document[k]
        if(!storage[char]) {
            storage[char] = 1
        } else storage[char] ++;
    }
    for(let i in characters) {
        var letter = characters[i]
        if(storage[letter]) {
            storage[letter]--;
        }
    }
    for(let j in storage) {
        if(storage[j] !== 0) return false
    }
    return true;
}

var chars = "Bste!hetsi ogEAxepelrtx "
var doc = "AlgoExpert is the Best"
console.log(generateDocument(chars, doc))