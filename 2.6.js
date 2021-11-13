function YearsAndCenturies(x){
    let year = parseInt(x);
    if (year % 100 == 0){
        return year / 100;
    }
    else {
        let answer = (year - (year % 100));
        return (answer/ 100) + 1;
    }
}
let x = 1917;
console.log(YearsAndCenturies(x));

// console.log(YearsAndCenturies(x));
// console.log(1917 - (1917 % 100));

