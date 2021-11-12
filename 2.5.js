function Summation(num){
    let arr = Array.from({length: num}, (_, i) => i + 1)
    let count = 0;
    for (let i = 0; i <= arr.length - 1; i++){
        count = count + arr[i];
    }
    return count;
}
console.log(Summation(3));