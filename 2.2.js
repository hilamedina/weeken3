// function InBinary(arr){
//     let count = 1;
//     for (let i = arr.length -1; i >= 0; i--)
//     {
//         if (arr[i] == 1){
//             count  = count * (2 ** i)
//         }
//     }
// return count;
// }
// let arr = [0,0,0,1];
// console.log(InBinary(arr));

function InBinary(arr){
    let count = 0;
    let j = 0;
    for (let i = arr.length -1 ; i >= 0; i-- ,j++)
    {
        if (arr[i] == 1){  
            count  = count + (2 ** (j));
        }
    }
return count;
}
let arr = [0,1,1,1];
console.log(InBinary(arr));