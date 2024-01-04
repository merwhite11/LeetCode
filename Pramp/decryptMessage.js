/*
input: string of chars
output: decrypted word

examples:
var word = 'dnotq'
output: crime

encryption steps to reverse:
lowercase alphabet 97-122
c
- convert to ASCII -> 99
- add accumulation var = 1 -> 100
- subtract until in range -> 100
- convert to letter -> d

decryption
d
- convert to ASCII val -> 100
- subtract accumulation var = 1 -> 99
- (update acc var)-> 100
- add until in range -> 99
- convert to char -> c

n
- convert to ASCII val -> 110
- subtract accumulation val (-100) -> 10
- add 26 until in range -> (26 x 3 = 104) -> 114
- convert to ASCII -> r
- (accumulate var: 100 + 114) -> 214

plan:
acc var = 1
decypted = []

loop thru chars in word
  convert to ascii val -> store as ascii
  subtract acc var from ascii val -> store as subtracted
  while subtracted is < 97, keep adding 26
  conver subtracted to ascii
  push char to array
  add ascii val to acc


*/

function decrypt(word) {
  var acc = 1;
  var decrypted = [];

  for(let char in word) {
    var curr = word[char];
    let ascii = curr.charCodeAt();
    ascii = ascii - acc;
    while(ascii < 97) ascii += 26;
    var letter = String.fromCharCode(ascii);
    decrypted.push(letter);
    acc += ascii
  }
  return decrypted.join('')
}

var word = 'dnotq'
console.log(decrypt(word))



*/
