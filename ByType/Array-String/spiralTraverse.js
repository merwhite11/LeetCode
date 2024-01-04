/*
input: n x m 2-d array 
output: 1-d array of all els in spiral order
spiral patter: L -> R, T -> B, L -> R, B -> T (then shift one and repeat) 

array = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
]

output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

n = 4
m = 4

i = 0
L->R loop thru the i row // start at 0 end at m - i
T->B then loop thru the m - i el of each row // start at 0 , m - 1 - i
R->L loop thru the (m - 1) - i row backwards // i = m - 1 - i , i > 0
B->T loop thru the i el of each row // i = 0 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
i++

i = 1
L->R row 1, i = 1, i < m - i

result array 

startRow = 0 
sC = m - 1 //3
eR = n - 1   //3
endCol = 0

traverse(sR, sC, eR, eC) 

L:R loop true startrow from sR -> m - 1
    push to res

T:B loop thru whole arr, push each startCol el to res

R:L loop thru endRow from endCol to startRow + 1

B:T loop thru endCol from endRow to startRow + 1

startRow ++
startCol --
endRow --
endCol ++
*/
//RECURSIVE CALL

function spiralTraverse(array) {
    var result = [];
    var startRow = 0;
    var startCol = 0;
    var endRow = array.length - 1;
    var endCol = array[0].length - 1;

    function traverse(array, sR, sC, eR, eC) {
        console.log(eC)
        if(sR > eR || sC > eC) return;
        //L:R
        for(let i = sC; i <= eC; i++) {
            result.push(array[sR][i]);
        }
        //T:B
        for(let i = sR + 1; i <= eR; i++) {
           result.push(array[i][eC])
        }
        //R:L
        for(let i = eC - 1; i >= sC; i--) {
            result.push(array[eR][i])
        }
        //B:T
        for(let i = eR - 1; i > sR ; i--) {
            console.log('B:T', i, eC, array[i][eC])
            result.push(array[i][sC])
        }
        sR ++; 
        sC ++; 
        eR --; 
        eC --; 
        traverse(array, sR, sC, eR, eC);
    }
    traverse(startRow, startCol, endRow, endCol);
    return result;
  }



  var array2 = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ]
    var array = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7]
  ]
  
  console.log(spiralTraverse(array2))
  /*
  
[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10, 9, 8, 7]


*/
//ITERITIVE SOLUTION
/*
function spiralTraverse(array) {
    var result = [];
    var sR = 0;
    var sC = 0;
    var eR = array.length - 1;
    var eC = array[0].length - 1;
    
    while(sR <= eR && sC <= eC) {
        for(let i = sC; i <= eC; i++) {
            result.push(array[sR][i]);
        }
        for(let i = sR + 1; i <= eR; i++) {
            result.push(array[i][eC])
        }
        for(let i = eC - 1; i >= sC; i--) {
            result.push(array[eR][i])
        }
        for(let i = eR - 1; i > sR ; i--) {
            console.log('B:T', i, eC, array[i][eC])
            result.push(array[i][sC])
        }
        sR ++; 
        sC ++; 
        eR --; 
        eC --; 
    }
    return result;
}
*/