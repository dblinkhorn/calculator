// Calculator project from The Odin Project

// Must be able to take two numbers and an operator and return the answer

// separate function for each type of operation: add, subtract, multiply, divide
// must be able to detect any click of a number button
  // needs a variable to store the numbers the user clicks and display them on the calculator screen
  // needs a function that will use the user click on a given number and store it in the variable above
  // "first number" must be any number buttons clicked before an operator is clicked, all stored in variable
// needs a variable to store the operator the user clicks and display it on the screen
// must be able to detect any click of an operator button
  // needs a function that will detect which operator the user clicks and display it on the screen
  // "second number" must be any number buttons clicked after operator is clicked and before equals button is clicked, all stored in variable
// when user hits equals key, needs a function that will take the two numbers and the operator and return the answer and display it
// needs a function that will clear the screen when necessary or when user clicks button
// needs a function that will delete one item from the screen at a time

let add = function add (x, y) {
  return x + y;
}

let subtract = function subtract (x, y) {
  return x - y;
}

let multiply = function multiply (x, y) {
  return x * y;
}

let divide = function divide (x, y) {
  if (y === 0) {
    display.innerHTML = "You can't divide by zero!";
    // resetDisplay();
  } else {
    return x / y;
  }
}

function operate (operator, firstNumber, secondNumber) {
  if (operator === "+") {
    display.textContent = add(Number(firstNumber), Number(secondNumber));
  }
  if (operator === "-") {
    display.textContent = subtract(Number(firstNumber), Number(secondNumber));
  }
  if (operator === "*") {
    display.textContent = multiply(Number(firstNumber), Number(secondNumber));
  }
  if (operator === "/") {
    display.textContent = divide(Number(firstNumber), Number(secondNumber));
  }
  resetValues();
  needsReset = true;
}

function resetValues() {
  firstNumber = "";
  secondNumber = "";
  userOperator = "";
}

let equal = document.getElementById("equal").addEventListener("click", function () {
  operate(userOperator, firstNumber, secondNumber);
})

function resetDisplay() {
  display.textContent = 0;
}

deleteButton = document.getElementById("delete").addEventListener("click", displayDelete);

function displayDelete() {
  display.textContent = display.textContent.toString().slice(0, -1);
}

let firstNumber = "";
let secondNumber = "";
let userOperator = "";

let needsReset = false;

let display = document.getElementById("display");

function addUserNumber(number) {
  if (needsReset === true) {
    resetDisplay();
  }
  if (display.textContent === "0") {
    displayDelete();
  }
  if (userOperator === "") {
    firstNumber += number;
  } else {
    secondNumber += number;
  }
  display.textContent += number;
  needsReset = false;
}

function addUserOperator(operator) {
  if (display.textContent === "0") {
    displayDelete();
  }
  if (userOperator !== "" || firstNumber === "0") {
    return;
  }
  userOperator = operator;
  display.textContent += ` ${operator} `;
}

let numberButtons = document.querySelectorAll("#number");
let operatorButtons = document.querySelectorAll("#operator")
let clear = document.getElementById("clear").addEventListener("click", function() {
  resetDisplay();
})

numberButtons.forEach( function (number) {
  number.addEventListener("click", function () {
    addUserNumber(number.textContent)
  });
});

operatorButtons.forEach( function (operator) {
  operator.addEventListener("click", function () {
    addUserOperator(operator.textContent)
  });
});