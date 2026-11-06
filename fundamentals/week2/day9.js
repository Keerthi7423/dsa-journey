
// ============================================
// DAY 9: FUNCTION EXPRESSIONS & ARROW FUNCTIONS
// ============================================


// ============================================
// PART 1: FUNCTION DECLARATIONS
// ============================================

function greetUser(name) {
    return `Hello, ${name}!`;
}

console.log(greetUser("Keerthi"));


// ============================================
// PART 2: FUNCTION EXPRESSIONS
// ============================================

const addNumbers = function (a, b) {
    return a + b;
};

console.log("Addition:", addNumbers(10, 20));


// Anonymous function
const multiplyNumbers = function (a, b) {
    return a * b;
};

console.log("Multiplication:", multiplyNumbers(5, 4));


// ============================================
// PART 3: ARROW FUNCTIONS
// ============================================

// Multiple parameters
const subtractNumbers = (a, b) => {
    return a - b;
};

console.log("Subtraction:", subtractNumbers(20, 10));


// Single parameter
const squareNumber = number => {
    return number * number;
};

console.log("Square:", squareNumber(5));


// No parameters
const sayHello = () => {
    return "Hello JavaScript!";
};

console.log(sayHello());


// ============================================
// PART 4: IMPLICIT RETURN
// ============================================

const divideNumbers = (a, b) => a / b;

console.log("Division:", divideNumbers(20, 5));

const cubeNumber = number => number ** 3;

console.log("Cube:", cubeNumber(3));


// ============================================
// PART 5: RETURNING OBJECTS
// ============================================

const createUser = () => ({
    name: "Keerthi",
    role: "Frontend Developer",
    language: "JavaScript"
});

console.log("User:", createUser());


// ============================================
// PART 6: AREA & PERIMETER HELPERS
// ============================================

// Rectangle area using normal function
function calculateArea(length, width) {
    return length * width;
}

// Rectangle perimeter using normal function
function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

console.log("Rectangle Area:", calculateArea(10, 5));
console.log("Rectangle Perimeter:", calculatePerimeter(10, 5));


// ============================================
// PART 7: ARROW FUNCTION VERSIONS
// ============================================

const calculateAreaArrow = (length, width) =>
    length * width;

const calculatePerimeterArrow = (length, width) =>
    2 * (length + width);

console.log("Arrow Area:", calculateAreaArrow(10, 5));
console.log("Arrow Perimeter:", calculatePerimeterArrow(10, 5));


// ============================================
// PART 8: SHORTEST JAVASCRIPT PROGRAM
// ============================================

// An empty JavaScript file is a valid program.
// JavaScript can execute without any statements.


// ============================================
// PART 9: WINDOW OBJECT
// ============================================

// Browser-only examples.
// Uncomment these lines when running in a browser.

// console.log(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.location.href);


// ============================================
// PART 10: THIS KEYWORD
// ============================================

const user = {
    name: "Keerthi",

    greet: function () {
        console.log("Normal function this:", this.name);
    },

    greetArrow: () => {
        console.log("Arrow function this:", this.name);
    }
};

user.greet();
user.greetArrow();

// Note:
// Normal function gets this from its call-site.
// Arrow function inherits this from its surrounding scope.


// ============================================
// PART 11: YOUR PRACTICE QUESTIONS
// ============================================

// Solve these yourself.

// Q1. Create a function expression named add(a, b).
// Return the sum of two numbers.


// Q2. Convert multiply(a, b) into an arrow function.


// Q3. Create an arrow function square(number).
// Use implicit return.


// Q4. Create an arrow function greet(name).
// Return a greeting message.


// Q5. Create normal and arrow functions to calculate
// the area of a rectangle.


// Q6. Create normal and arrow functions to calculate
// the perimeter of a rectangle.


// Q7. Create a function expression isEven(number).
// Return true if even, otherwise false.


// Q8. Explain why a const function expression cannot
// be called before initialization.


// Q9. Explain the difference between this in a
// normal function and an arrow function.


// Q10. Explain the difference between window,
// global var and global let in a browser script.


// ============================================
// PART 12: DAY 9 COMPLETION CHECKLIST
// ============================================

// [ ] Function expressions
// [ ] Anonymous functions
// [ ] Arrow functions
// [ ] Implicit return
// [ ] Returning objects from arrow functions
// [ ] Shortest JavaScript program
// [ ] Window object
// [ ] this keyword introduction
// [ ] Area and perimeter helpers
// [ ] Arrow function conversions
// [ ] All 10 practice questions
// [ ] GitHub commit
