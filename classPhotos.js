/*
input: 2 arrays of pos ints. arr 1 heights of red shirts. arr 2 heights of blue shirts. 
can the 2 arrs be arranged so each index of row 2 must be greater than corresponding index in row 1
output: true or false 

red = [5, 8, 1, 3, 4]
blue = [6, 9, 2, 4, 5]

create possible var set to true
sort arrays

[1, 3, 4, 5, 8]
[2, 4, 5, 6, 9]
compare first els
loop i through reds
    if red [0] > blue [0] && red[i] < blue[i] set to false; break
    if red[0] < blue[0] && red[i] > blue[i] set to false; break

return possible



*/
function bubbleSort(arr) {
    //loop i thru arr starting at end
    for(let i = arr.length; i > 0; i--) {
        var noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                noSwaps = false;
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
function classPhotos(redShirtHeights, blueShirtHeights) {
    var possible = false;
    var red = bubbleSort(redShirtHeights);
    var blue = bubbleSort(blueShirtHeights);
    console.log('red', red)
    console.log('blue', blue)
    for (let i = 0; i < red.length; i++) {
        console.log('blue, red', blue[i], red[i])
        if(red[0] > blue[0] && red[i] > blue[i]) {
            console.log('red, blue', red[i], blue[i])
            possible = true;
        }
        else if(blue[0] > red[0] && blue[i] > red[i]) {
            possible = true;
        }
        else {
            possible = false;
            break;
        };
    }
    return possible;
  }

console.log(classPhotos([19, 2, 4, 6, 2, 3, 1, 1, 4], [21, 5, 4, 4, 4, 4, 4, 4, 4]))