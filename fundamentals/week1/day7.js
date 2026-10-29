/* Day 7: JavaScript Arrays */

// 1. Create an array and access elements
console.log("---- Array Basics ----");

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log("Length:", fruits.length);
console.log("Last element:", fruits[fruits.length - 1]);

// 2. Update an element
console.log("---- Updating Arrays ----");

const numbers = [10, 20, 30];

numbers[1] = 25;

console.log(numbers);

// 3. Add and remove elements
console.log("---- Add and Remove ----");

const scores = [10, 20, 30];

scores.push(40);
console.log(scores);

scores.pop();
console.log(scores);

scores.unshift(5);
console.log(scores);

scores.shift();
console.log(scores);

// 4. Slice an array
console.log("---- Slice ----");

const values = [10, 20, 30, 40, 50];

const selected = values.slice(1, 4);

console.log("Selected:", selected);
console.log("Original:", values);

// 5. Splice an array
console.log("---- Splice ----");

const colors = ["Red", "Blue", "Green"];

colors.splice(1, 1, "Yellow");

console.log(colors);

// 6. Search an array
console.log("---- Searching ----");

const languages = ["HTML", "CSS", "JavaScript"];

console.log(languages.includes("CSS"));
console.log(languages.indexOf("JavaScript"));
console.log(languages.indexOf("Python"));

// 7. Iterate using a for loop
console.log("---- Loop Through Array ----");

const prices = [100, 200, 300, 400];

for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

// 8. Calculate the sum of array elements
console.log("---- Array Sum ----");

const marks = [80, 75, 90, 85];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

console.log("Total:", sum);

// 9. Find the largest element
console.log("---- Largest Element ----");

const valuesToCheck = [12, 45, 7, 89, 23];

let largest = valuesToCheck[0];

for (let i = 1; i < valuesToCheck.length; i++) {
  if (valuesToCheck[i] > largest) {
    largest = valuesToCheck[i];
  }
}

console.log("Largest:", largest);

// 10. Count even numbers
console.log("---- Count Even Numbers ----");

const data = [1, 2, 3, 4, 5, 6, 8];

let evenCount = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 === 0) {
    evenCount++;
  }
}

console.log("Even count:", evenCount);