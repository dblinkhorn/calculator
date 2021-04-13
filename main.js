function add (x, y) {
  return x + y;
}

function subtract (x, y) {
  return x - y;
}

function sum (numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let total = numbers.reduce((subTotal, nextNum) => subTotal + nextNum);
  return total;
}

function multiply (numArray) {
  return numArray.length ? numArray.reduce((multiplier, nextItem) => multiplier * nextItem) : 0;
}