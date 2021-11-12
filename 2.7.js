function hila(str, num1, num2) {
    switch (str) {
    case "+":
        return num1 + num2;
    case "-":
        return num1 - num2;
    case "*":
        return num1 * num2;
    case "/":
        return num1 / num2;
    default:
        return 0;
    }
}
console.log(hila("*",7,2));