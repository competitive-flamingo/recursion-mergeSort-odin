function fibs(n) {
    let arr = [0, 1];
    if(n <= 2) return arr.slice(0, n);
    for(let i = 2 ; i < n ; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

function fibsRec(n, arr = [0, 1]) {
    if(n <= arr.length) return arr.slice(0, n);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibsRec(n, arr);
}


console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));

console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));