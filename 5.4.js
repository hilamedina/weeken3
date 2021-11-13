function ToWeirdCase(str){
    let newstr = "";
    for (let i = 0; i <= str.length -1; i++){
        if (i  %  2 == 0){
           newstr = newstr + str[i].toUpperCase();
        } 
        else{
            newstr = newstr + str[i];
        }
    }
    return newstr;       
}
console.log(ToWeirdCase("sivan"));
