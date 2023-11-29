/*
input: non-empty string of lowercase letters, non-neg int repping a key k
output: new string with each letter shifted k positions in alphabet
constraints: should wrap so z shifted 1 letter maps to a

string = "xyz"
key = 2

"zab"

y index = 2
25 - index + 1



map alphabet into array

for each el in string
    get index of the el in alphabet array
    add k to index
    if new index > 25
        newIndex = 25 - (index + 1)
    get letter at newIndex , concat to string
return string

x
index = 23
newIndex = 25
newChar = z

y 
index = 24
newIndex = 26
newIndex = 25 - (newIndex - 1) = 0
newChar = a

z
index = 25
newIndex = 27
newIndex = 25

index = 10
newIndex = 30
newIndex = 14

25 - 11 

abc

a , key = 57
58
newIndex = 25 - (1 + 56) = 32
25 - (newindex - 1)
*/

function caesarCipherEncryptor(string, key) {
    var alpha = Array.from(Array(26)).map((e, i) => i + 65);
    var alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
    var newString = '';
    for(var char in string){
        var index = alphabet.indexOf(string[char]);
        console.log(index)
        var newIndex = index + key;
        while(newIndex > 25) {
            newIndex = Math.abs(25 - (newIndex-1))
        }
        var newChar = alphabet[newIndex]
        newString = newString.concat(newChar);
    }  
    return newString
}


var string = 'abc'
console.log(caesarCipherEncryptor(string, 57))