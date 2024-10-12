const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');

        if (value >= '0' && value <= '9' || value === '.') {
            currentInput += value;
            display.innerText = currentInput;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            previousInput = currentInput;
            currentInput = '';
            operator = value;
        }
    });
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '0';
});

equalButton.addEventListener('click', () => {
    if (operator && previousInput) {
        const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
        display.innerText = result;
        currentInput = result;
        operator = '';
    }
});

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}
