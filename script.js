
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

let firstNumber;
let operator;
let secondNumber;

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