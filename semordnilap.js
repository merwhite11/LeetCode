/*
input: list of unique strings and 
output: returns a lits of sme pairs - set of different strings where the reverse of one is the foreward of the other

words = ["diaper", "abc", "test", "cba", "repaid"]
output: [["diaper", "repaid"], ["abc", "cba"]]

pairs = []
loop thru list
    current word to compare
    loop thru list
        curr word and compare word not same length -> continue
        if they're the same length
            loop thru letters
                if curr word letter is not equal to compare word letter -> break
            push curr word and compare word to pairs list ->  break

//OPTIMIZED

create a set with all words
loop thru words array
    reverse word
    if reversed word is in set
        push word and reverse to pairs
        remove word and reverse from set
    
*/

function semordnilap(words) {
    var pairs = [];
    var wordSet = new Set(words);
    for(let i in words) {
        var word = words[i];
        var reversed = word.split('').reverse().join('');
        if(wordSet.has(reversed) && reversed !== word) {
            pairs.push([word, reversed])
            wordSet.delete(word, reversed)
        }
    }
    return pairs;
}


// function semordnilap(words) {
//     var pairs = [];
//     for(let i = 0; i < words.length - 1; i++) {
//         var curr = words[i];
//         for(let j = i+1; j < words.length; j++) {
//             var compare = words[j];
//             console.log(curr, compare)
//             if(curr.length !== compare.length || curr === compare) continue;
//             k = curr.length;
//             for(let m = 0; m < curr.length; m++) {
//                 console.log(curr[m], compare[k])
//                 k--;
//                 if(curr[m] !== compare[k]) break;
//             }
//             if(k === 0) pairs.push([curr, compare]);
//         }
//     }
//     return pairs;
//   }

  

var words = ["liver", "dog", "hello", "desserts", "evil", "test", "god", "stressed", "racecar", "palindromes", "semordnilap", "abcd", "live"]
console.log(semordnilap(words))