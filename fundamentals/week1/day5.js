
/* Day 5: Loops and Iteration */

// 1. Print numbers from 1 to 10
console.log("---- For Loop ----");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Sum numbers from 1 to n
console.log("---- Sum ----");

const n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log("Sum:", sum); // 15

// 3. Print even numbers from 1 to 20
console.log("---- Even Numbers ----");

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}

// 4. Find the factorial of a number
console.log("---- Factorial ----");

const number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log("Factorial:", factorial); // 120

// 5. Reverse counting using while
console.log("---- While Loop ----");

let count = 5;

while (count >= 1) {
  console.log(count);
  count--;
}

// 6. Multiplication table
console.log("---- Multiplication Table ----");

const tableNumber = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// 7. Nested loops: print a pattern
console.log("---- Pattern ----");

for (let row = 1; row <= 4; row++) {
  let pattern = "";

  for (let col = 1; col <= row; col++) {
    pattern += "* ";
  }

  console.log(pattern);
}
