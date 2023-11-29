function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] === val) {
            return true;
        } 
    }
    return -1;
}

console.log(search([1, 2, 3], 4))