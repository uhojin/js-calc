const display = document.getElementById("display");
// const numberButtons = document.querySelectorAll('#num button');
const buttons = document.querySelectorAll('button');
let num1, num2, operator;
// let displayValue = display.value;

buttons.forEach(button => button.addEventListener('click', updateDisplay));

console.log(display.classList);

function updateDisplay() {
    if (typeof(num1) === 'undefined') {

        display.value += this.textContent;
        console.log(this.classList);
    }
        // console.log(display.value);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    if (operator === 'ADD') {
        result = add(num1, num2);
    } else if (operator === 'SUB') {
        result = subtract(num1, num2);
    } else if (operator === 'MUL') {
        result = multiply(num1, num2);
    } else if (operator === 'DIV') {
        result = divide(num1, num2);
    }
}

