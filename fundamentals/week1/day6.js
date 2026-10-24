
/* Day 6: JavaScript Functions */

// 1. Function declaration
console.log("---- Function Declaration ----");

function greet() {
  return "Hello, JavaScript!";
}

console.log(greet());

// 2. Parameters and arguments
console.log("---- Parameters and Arguments ----");

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
console.log(add(5, 7));

// 3. Return values
console.log("---- Return Values ----");

function square(number) {
  return number * number;
}

const result = square(6);
console.log(result);

// 4. Function expression
console.log("---- Function Expression ----");

const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(15, 8));

// 5. Arrow function
console.log("---- Arrow Function ----");

const multiply = (a, b) => a * b;

console.log(multiply(4, 5));

// 6. Default parameter
console.log("---- Default Parameters ----");

function welcome(name = "Guest") {
  return `Welcome, ${name}!`;
}

console.log(welcome("Keerthi"));
console.log(welcome());

// 7. Check even or odd
console.log("---- Even or Odd ----");

const isEven = number => number % 2 === 0;

console.log(isEven(8)); // true
console.log(isEven(7)); // false

// 8. Find the largest of two numbers
console.log("---- Largest Number ----");

function findLargest(a, b) {
  if (a > b) {
    return a;
  }

  if (b > a) {
    return b;
  }

  return "Both are equal";
}

console.log(findLargest(10, 20));
console.log(findLargest(15, 5));
console.log(findLargest(7, 7));

// 9. Sum numbers from 1 to n
console.log("---- Sum Using a Function ----");

function sumToN(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumToN(5)); // 15
console.log(sumToN(10)); // 55
