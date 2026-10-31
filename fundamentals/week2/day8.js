
// ==========================================
// DAY 8: JAVASCRIPT FUNCTIONS
// Topics: Parameters, Return, Default Parameters,
//         Rest Parameters, and Function Practice
// ==========================================


// ==========================================
// PART 1: FUNCTION DECLARATIONS
// ==========================================

// Example 1: Create a function that prints a greeting.

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser("Keerthi");


// ==========================================
// PART 2: PARAMETERS AND ARGUMENTS
// ==========================================

// Example 2: Add two numbers and return the result.

function addNumbers(a, b) {
    return a + b;
}

const sum = addNumbers(10, 20);
console.log("Sum:", sum);


// ==========================================
// PART 3: RETURN VS CONSOLE.LOG
// ==========================================

// Example 3: Return a number's square.

function square(number) {
    return number * number;
}

const squareResult = square(5);
console.log("Square:", squareResult);


// ==========================================
// PART 4: DEFAULT PARAMETERS
// ==========================================

// Example 4: Calculate the final price after a discount.
// If no discount is provided, use 10%.

function calculateDiscount(price, discount = 10) {
    return price - (price * discount / 100);
}

console.log("Default discount:", calculateDiscount(1000));
console.log("Custom discount:", calculateDiscount(1000, 20));


// ==========================================
// PART 5: REST PARAMETERS
// ==========================================

// Example 5: Add any number of arguments.

function sumNumbers(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log("Rest parameter sum:", sumNumbers(10, 20, 30));
console.log("Another sum:", sumNumbers(1, 2, 3, 4, 5));


// ==========================================
// PART 6: YOUR PRACTICE QUESTIONS
// ==========================================

// IMPORTANT:
// Solve these yourself.
// Do not copy solutions from the internet.
// Test each function using console.log().


// Question 1:
// Create checkEvenOdd(number).
// Return "Even" if the number is even.
// Otherwise, return "Odd".


// Question 2:
// Create calculateArea(length, width).
// Return the area of a rectangle.


// Question 3:
// Create celsiusToFahrenheit(celsius).
// Formula: (celsius * 9 / 5) + 32.


// Question 4:
// Create findLargest(a, b).
// Return the larger of the two numbers.
// If they are equal, return either number.


// Question 5:
// Create sumNumbersPractice(...numbers).
// Use a rest parameter and a loop to return the sum.


// Question 6:
// Create calculateFinalPrice(price, discount = 10).
// Return the price after applying the discount.


// Question 7:
// Create factorial(number).
// Return the factorial of a non-negative integer.
// Example: factorial(5) should return 120.
// factorial(0) should return 1.


// Question 8:
// Create reverseNumber(number).
// Return the digits of a positive integer in reverse order.
// Example: reverseNumber(1234) should return 4321.


// Question 9:
// Create isPrime(number).
// Return true if the number is prime; otherwise, return false.
// Remember: numbers less than 2 are not prime.


// Question 10:
// Create calculateAverage(...numbers).
// Return the average of the supplied numbers.
// Decide how your function should handle zero arguments.


// ==========================================
// PART 7: FINAL SELF-TEST
// ==========================================

// After completing the questions, test:
// 1. Normal inputs
// 2. Zero
// 3. Negative values where relevant
// 4. Missing optional arguments
// 5. Multiple arguments for rest parameters
// 6. Edge cases, such as factorial(0) and isPrime(1)


// DAY 8 COMPLETION CHECKLIST
// [ ] Understand function declarations
// [ ] Understand parameters and arguments
// [ ] Understand return vs console.log()
// [ ] Understand default parameters
// [ ] Understand rest parameters
// [ ] Solve all 10 practice questions
// [ ] Run the file without errors
// [ ] Write your own notes in notes/day8-notes.md
// [ ] Commit your work to GitHub
