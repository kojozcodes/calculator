
const add = (num1 , num2) => {
    return num1 + num2
}

const subtract = (num1,num2) => {
    return num1 - num2
}

const multiply = (num1,num2) => {
    return num1 * num2
}

const divide = (num1,num2) => {
    if (num2 !== 0) {
        return num1/num2
    } else {
        return "Cannot divide by zero"
    }
}

let firstNumber = '';
let operator = '';
let secondNumber = '';

let display = document.querySelector('#cal-display')

const appendNumber = (num) => {
    if (operator === '') {
        firstNumber += num
        updateDisplay(firstNumber)
    } else {
        secondNumber += num
        updateDisplay(secondNumber)
    }
}

const setOperator = (op) => {
    if (firstNumber !== '' && secondNumber === '') {
       operator = op
       updateDisplay(`${firstNumber} ${operator}`)
    }
}

const clearDisplay = () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    updateDisplay('0')
}

const updateDisplay = (value) => {
    display.value = value
}

const calculate = () => {
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        const result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber))
        updateDisplay(result)
        firstNumber = result.toString();
        operator = ''
        secondNumber = ''
    }
}

const operate = (num1, op, num2) => {
    switch (op) {
        case '+':
            add(num1, num2)
            break;
        
        case '-':
            subtract(num1, num2)
            break;

        case '*':
            multiply(num1, num2)
            break;

        case '/':
            divide(num1, num2)
            break;
    }
}