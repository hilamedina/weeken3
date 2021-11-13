function mask(str){
    let l = str.length;
    let strnew = "";
    for (let i = 0; i <= l - 4; i++){
        strnew = strnew + "#" 
    }
    for(let i = l-4; i < l; i++){
        strnew = strnew + str[i];
    }
    return strnew;
}
console.log(mask("hilamedina"))
