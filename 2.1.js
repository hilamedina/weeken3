function IsItNumber(array){
    array.sort((a, b) => a - b);
    console.log(array)
    let num1 = array.shift();
    let num2 = array.shift();
    let sum = num1 + num2
    return sum;
}
let array = [19, 5, 42, 2, 77];
console.log(IsItNumber(array));
