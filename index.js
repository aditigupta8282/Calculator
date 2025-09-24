function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}   
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}
function doOperation(a,b,operation)
{
    return operation(a,b);
}

let addition = doOperation(5, 3, sum);
console.log("Addition: " + addition);