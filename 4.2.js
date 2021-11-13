function tribo(arr1 ,n){
    if (isNaN(n) || n < 0) return undefined;
    let arr = arr1;
    if (n == 0 || n==1) {
        return n;
    }
    for (let i = 3; i <= n ; i++){
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
    }
    return arr[n];
}
console.log(tribo([0,0,1], 7));
