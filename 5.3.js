function camelCase(str){
    for (let i = 0; i <= str.length -1; i++){
        if (str[i] == "_"){
            let str1 = str[i+1].toUpperCase();
            str = str.slice(0, i) + str1 + str.slice(i+2, str.length); 
        }
    }
    return str;
}
console.log(camelCase("Hila_holla_s89"));