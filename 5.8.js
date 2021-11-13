function mask(str){
    let l = str.length;
    for (let i = 0; i <= str.length -1; i++){
        if (str[i] < (l - 4)){
         let str1 =  str1 + str.ReplaceAt(i , "h");
        }
    }
    return str1;
}
console.log(mask("medina"));
