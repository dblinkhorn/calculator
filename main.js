function sum (x, y) {
  if (numbers.length === 0) {
    return 0;
  }
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
  } else {
    return x / y;
  }
}

function operate (operator, number1, number2) {
  if (operator === "+") {
    add(numbers[0], numbers[1])
  }
}

let numbers = [];
let UserOperator;

let displayText = [""];
let displayDiv = document.getElementById("display");

function addUserNumber(number) {
  numbers.push(number);
  displayText.push(`${number}`);
  console.log(number);
}

function addUserOperator(clickedOperator) {
  userOperator.push(clickedOperator);
  displayText.push(clickedOperator);
  console.log(userOperator);
}

let display = document.getElementById("display");

let zero = document.getElementById("zero").addEventListener("click", addUserNumber(0));
let one = document.getElementById("one").addEventListener("click", addUserNumber(1));
let two = document.getElementById("two").addEventListener("click", addUserNumber(2));
let three = document.getElementById("three").addEventListener("click", addUserNumber(3));
let four = document.getElementById("four").addEventListener("click", addUserNumber(4));
let five = document.getElementById("five").addEventListener("click", addUserNumber(5));
let six = document.getElementById("six").addEventListener("click", addUserNumber(6));
let seven = document.getElementById("seven").addEventListener("click", addUserNumber(7));
let eight = document.getElementById("eight").addEventListener("click", addUserNumber(8));
let nine = document.getElementById("nine").addEventListener("click", addUserNumber(9));

let add = document.getElementById("add").addEventListener("click", addUserOperator("+"));
let minus = document.getElementById("subtract").addEventListener("click", addUserOperator("-"));
let product = document.getElementById("multiply").addEventListener("click", addUserOperator("*"));
let divided = document.getElementById("divide").addEventListener("click", addUserOperator("/"));