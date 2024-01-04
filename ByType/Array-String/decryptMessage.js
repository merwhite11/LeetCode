/*
input:
*/

function decrypt(word) {
  var subtract = 1;
  var result = "";

  for(let char in word) {
    var ascii = word.charCodeAt(char);
    ascii = ascii - subtract;
    while(ascii < 97 || ascii > 122) {
      ascii = ascii + 26;
    }
    subtract += ascii;
    var decrypted = String.fromCharCode(ascii);
    result = result.concat(decrypted)

  }
  return result;
}