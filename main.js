function add (numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let total = numbers.reduce((subTotal, nextNum) => subTotal + nextNum);
  return total;
}


let subtract = function subtract (x, y) {
  return x - y;
}

let multiply = function multiply (numArray) {
  return numArray.length ? numArray.reduce((multiplier, nextItem) => multiplier * nextItem) : 0;
}

let divide = function divide (x, y) {
  if (y === 0) {
    display.innerHTML = "You can't divide by zero!";
  } else {
    return x / y;
  }
}

function operate (operator, number1, number2) {
  // add code
}

let numbers = [];
let UserOperator;

function addUserNumber(number) {
  numbers.push(number);
}

function addUserOperator(selectedOperator) {
  userOperator.push(selectedOperator);
  display.innerHTML = ""
}

let display = document.getElementById("display");

let zero = document.getElementById("zero").addEventListener("click", addUserNumber(0));
let one = document.getElementById("one").addEventListener("click", addUserNumber(1));
let two = document.getElementById("two").addEventListener("click", addNumber(2));
let three = document.getElementById("three").addEventListener("click", addNumber(3));
let four = document.getElementById("four").addEventListener("click", addNumber(4));
let five = document.getElementById("five").addEventListener("click", addNumber(5));
let six = document.getElementById("six").addEventListener("click", addNumber(6));
let seven = document.getElementById("seven").addEventListener("click", addNumber(7));
let eight = document.getElementById("eight").addEventListener("click", addNumber(8));
let nine = document.getElementById("nine").addEventListener("click", addNumber(9));

let add = document.getElementById("add").addEventListener("click", addUserOperator("+"));
let subtract = document.getElementById("subtract").addEventListener("click", addUserOperator("-"));
let multiply = document.getElementById("multiply").addEventListener("click", addUserOperator("*"));
let divide = document.getElementById("divide").addEventListener("click", addUserOperator("/"));