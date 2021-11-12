function unique(arr){
    arr.sort((a, b) => a - b);
    console.log(arr);
    if (arr[0] !== arr[1]){
        return arr[0];
    }
    else if (arr[arr.length -1] !== arr[arr.length - 2])
    {
        return arr[arr.length -1];
    }
}
let arr = [1,1,1,4];
console.log(unique(arr));
