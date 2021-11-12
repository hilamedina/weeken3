function findNextSquare(num){
    let square = Math.sqrt(num);
    if (square % 1 === 0){
        square = square + 1;
        return (square ** 2);
    }
    else{
        return -1;
    }
}
console.log(findNextSquare(121));

//to do it with while loop 
