function trimmingString(str){
    const arr = Object.assign([], str);
    arr.pop();
    arr.shift();
    let backtostring = arr.toString();
    return backtostring; 
}
let str = "hilamedina";
console.log(trimmingString(str));
