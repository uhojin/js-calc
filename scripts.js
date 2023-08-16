const display = document.getElementById("display");
const buttons = document.querySelectorAll('#num button, #operation button');
const numberButtons = Array.from(document.querySelectorAll('#num button'));
const operationButtons = Array.from(document.querySelectorAll('#operation button'));
let num1, num2, operator, answer;

buttons.forEach(button => button.addEventListener('click', updateDisplay));

console.log(display.id);
console.log(operationButtons);
console.log(numberButtons);

function updateDisplay() {
    // if (typeof(num1) === 'undefined') {
        // if (operationButtons.includes(this)) {
        //     return;
        // }
        // display.value += this.textContent;
        // console.log(this.id);
    // }

    if (numberButtons.includes(this)) {
        if (answer != undefined) {
            num1 = answer;
            // clearDisplay();
            display.value = '';
            answer = undefined;
        }
        display.value += this.textContent;
    }

    if (operationButtons.includes(this) && display.value != '') {

        if (this.textContent === 'CALCULATE') {
            num2 = display.value;
            answer = operate(num1, num2, operator);
            display.value = answer;
            return;
        }
        if (num1 != undefined) {
            num2 = display.value;
            operator = this.textContent;
            answer = operate(num1, num2, operator)
            display.value = answer;
            return;
            // num1 = display.value;
        }
        
        num1 = display.value;
        operator = this.textContent;
        // clearDisplay();
        display.value = '';
        return;
    }


    // if operator is pressed, check for display value
    // if empty, return
    // 
    
    // if (!(display.value = '') && operationButtons.includes(this)) {
    //     num1 = display.value;
    //     operator = this.textContent;
    //     return;
    // }
    

    // if input is operator and display is not empty

    // when display is not empty, and input is an operator
    // grab current display value as num1,
    // take input, which is an operator as operator,
    // only take numbers again until
    // another operation is pressed.
    // if calculate is pressed
    // grab everything after operator as num2
    // pass num1,2, operator to operate function
    // replace display value with result.
    // if another operator is pressed
    // calculate use result as num1 and add matching operator
    // repeat



        console.log(display.value);

    
}

function clearDisplay() {
    display.value = "";
    num1, num2, answer = undefined;
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
    return Number(a) / Number(b);
}

function operate(num1, num2, operator) {
    console.log(operator);
    if (operator === 'ADD') {
        result = add(num1, num2);
    } else if (operator === 'SUB') {
        result = subtract(num1, num2);
    } else if (operator === 'MUL') {
        result = multiply(num1, num2);
    } else if (operator === 'DIV') {
        result = divide(num1, num2);
    }
    num2,operator = undefined;
    return result;
}

