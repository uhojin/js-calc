const display = document.getElementById("display");
const buttons = document.querySelectorAll('#num button, #operation button');
const numberButtons = Array.from(document.querySelectorAll('#num button'));
const operationButtons = Array.from(document.querySelectorAll('#operation button'));
let num1, operator, answer;

// buttons.forEach(button => button.addEventListener('click', updateDisplay));
numberButtons.forEach(button => button.addEventListener('click', numberInput))
operationButtons.forEach(button => button.addEventListener('click', operatorInput))


function numberInput() {
    console.log("number");
    
    if (this.textContent == 0 && display.value == 0) {
        console.log('zero pressed twice, ignoring');
    } else {
        display.value += this.textContent;
    }
}

function operatorInput() {
    if (!display.value) {
        if (num1) {
            operator = this.textContent;
        }
    } else if (display.value) {
        if (num1) {
            answer = calculate();
            operator = this.textContent;
        } else if (!num1) {
            num1 = display.value;
            operator = this.textContent;
            display.value = '';
        }
    }
}

function calculate() {
    if (num1) {
        if (operator) {
            if (display.value) {
                answer = operate(num1, display.value, operator);
                console.log(answer);
                num1 = answer;
                display.placeholder = answer;
                display.value = '';
                return answer;
            } else {
                console.log('no second number');
            }
        } else {
            console.log('no operator');
        }
    } else {
        console.log('no first number');
    }
}

function clearDisplay() {
    num1 = undefined;
    operator = undefined;
    answer = undefined;
    display.placeholder = '0';
    display.value = '';
}

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (b == 0) {
        return 69;
    }
    return Number(a) / Number(b);
}

function operate(num1, num2, operation) {
    console.log(operation);
    if (operation === 'ADD') {
        result = add(num1, num2);
    } else if (operation === 'SUB') {
        result = subtract(num1, num2);
    } else if (operation === 'MUL') {
        result = multiply(num1, num2);
    } else if (operation === 'DIV') {
        result = divide(num1, num2);
    }
    // num1,num2,operator = undefined;
    return result;
}

