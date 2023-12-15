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
    if (b !== 0) {
      return a / b;
    } else {
      handleDivisionByZero();
    }
  }

  function handleDivisionByZero() {
    clearDisplay();
    updateDisplay("Error: Cannot divide by zero");
  }

let firstNumber = '';
let operator = '';
let secondNumber = '';

function operate(operator, a, b) {
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        return "Invalid operator";
    }
  }

  const displayElement = document.getElementById('display');

  // Function to append a number to the display
  function appendNumber(number) {
    if (operator === '') {
      firstNumber += number;
      updateDisplay(firstNumber);
    } else {
      secondNumber += number;
      updateDisplay(secondNumber);
    }
  }

  // Function to set the operator
  function setOperator(op) {
    if (firstNumber !== '' && secondNumber === '') {
      operator = op;
      updateDisplay(firstNumber + ' ' + operator);
    } else if (firstNumber !== '' && secondNumber !== '') {
        calculateResult()
        operator = op
        updateDisplay(firstNumber)
    }
  }

  // Function to clear the display
  function clearDisplay() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    updateDisplay('0');
  }

  // Function to update the display with a given value
  function updateDisplay(value) {
    displayElement.value = value;
  }

  function calculateResult() {
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
      const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
      updateDisplay(result);
      firstNumber = result.toString();
      operator = '';
      secondNumber = '';
    }
  }

  function addDecimal() {
    if (!displayElement.value.includes('.')) {
        if (operator === '') {
            firstNumber += '.';
            updateDisplay(firstNumber);
        } else {
            secondNumber += '.';
            updateDisplay(secondNumber);
        }
    }
}

function backspace() {
    if (operator === '') {
        firstNumber = firstNumber.slice(0, -1);
        updateDisplay(firstNumber);
    } else if (secondNumber !== '') {
        secondNumber = secondNumber.slice(0, -1);
        updateDisplay(secondNumber);
    }
}