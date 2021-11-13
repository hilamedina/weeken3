function fibo(n){
    if (isNaN(n) || n < 0) return undefined;
    let arr = [0, 1];
    if (n == 0 || n == 1) {
        return arr[n];
    }
    for (let i = 2; i <= n ; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
}

console.log(fibo(6));


[[21,0][0,21]]




