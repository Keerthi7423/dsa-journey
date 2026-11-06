Day 9 — JavaScript Function Expressions & Arrow Functions 🚀
According to your FINAL FULL PLAN: JavaScript → DSA → Job Switch → Apple, Day 9 covers:
1. Function expressions
2. Arrow functions
3. Shortest JavaScript program
4. window object
5. this keyword (introduction)
6. Area and perimeter helper functions
7. Converting normal functions into arrow functions
Let's build your notes from the fundamentals, with examples and practice.

Day 9 — Week 2, Tuesday
 90-minute study session

1. Function expressions
A function expression is a function stored inside a variable.

Function declaration:
function greet() {
    console.log("Hello");
}

greet();


Function expression:
const greet = function () {
    console.log("Hello");
};

greet();


Key difference:
- Function declarations are hoisted with their function body.
- Function expressions assigned to const or let cannot be called before initialization.
Example:
// Function declaration
sayHello();

function sayHello() {
    console.log("Hello");
}


This works.
// Function expression
sayHello();

const sayHello = function () {
    console.log("Hello");
};


This throws a ReferenceError.
2. Anonymous functions
An anonymous function is a function without a name.
const add = function (a, b) {
    return a + b;
};

console.log(add(10, 20));


Here, the function has no name, but it is assigned to the variable add.

Important: The variable name is used to call the function.
3. Arrow functions
Arrow functions provide a shorter syntax for writing functions.

Normal function:
function add(a, b) {
    return a + b;
}


Function expression:
const add = function (a, b) {
    return a + b;
};


Arrow function:
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


Arrow function variations
Example 1: Multiple parameters
const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));


Example 2: Single parameter

Parentheses can be omitted for a single parameter.
const square = number => {
    return number * number;
};

console.log(square(5));


Example 3: Implicit return

When the function body contains only one expression, you can remove {} and return.
const subtract = (a, b) => a - b;

console.log(subtract(20, 10));


Example 4: No parameters
const greet = () => "Hello Keerthi";

console.log(greet());


Example 5: Returning an object

Wrap the object in parentheses.
const createUser = () => ({
    name: "Keerthi",
    role: "Frontend Developer"
});

console.log(createUser());


4. Function declaration vs function expression vs arrow function
Feature	Declaration	Expression	Arrow
Syntax	function	function	=>
Name	Named	Named or anonymous	Usually anonymous
Hoisted with body	Yes	No	No
Own this	Yes	Yes	No
Own arguments	Yes	Yes	No

Remember: Arrow functions do not have their own this or arguments. They inherit this from their surrounding lexical scope.
5. Shortest JavaScript program
JavaScript can execute an empty program.



Even an empty JavaScript file can be executed by the JavaScript engine.

For example:
console.log("Hello World");


This is also a valid JavaScript program.
What happens when JavaScript executes?
At a high level:
1. The JavaScript engine processes the code.
2. A global execution context is created.
3. The code is executed.
This connects with your earlier Day 1 learning about execution contexts.
6. What is the window object?
The window object represents the browser's global window.

It provides access to browser-related features.

Example:
console.log(window);


You can access browser properties:
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location.href);


You can also access browser methods:
window.alert("Welcome!");
window.confirm("Are you sure?");


Important distinction
In a browser:
var name = "Keerthi";

console.log(window.name);


A top-level var declaration in a classic browser script creates a property on window.

But:
let age = 24;

console.log(window.age);


This does not create a window.age property.

Also, window is browser-specific. It is not available in Node.js.
7. What is this in JavaScript?
this is a keyword that refers to a value determined by how a function is called.

Example:
console.log(this);


In a browser's classic script at the top level, this refers to the global window object.
this inside an object method
const user = {
    name: "Keerthi",

    greet: function () {
        console.log(this.name);
    }
};

user.greet();


Output:
Keerthi


Here, this refers to the object before the dot: user.
this inside an arrow function
const user = {
    name: "Keerthi",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();


This does not behave like the previous example.

An arrow function does not create its own this; it inherits this from the surrounding scope.

Remember: Avoid using arrow functions as object methods when you need this to refer to the object.

We will study this in greater depth later in your roadmap.
8. Area and perimeter helpers
Your PDF specifically asks you to practise area/perimeter helpers and their arrow versions.
Rectangle
Area formula:
\[
Area = length \times width
\]

Perimeter formula:
\[
Perimeter = 2(length + width)
\]

Normal functions:
function calculateArea(length, width) {
    return length * width;
}

function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

console.log(calculateArea(10, 5));
console.log(calculatePerimeter(10, 5));


Arrow functions:
const calculateAreaArrow = (length, width) =>
    length * width;

const calculatePerimeterArrow = (length, width) =>
    2 * (length + width);

console.log(calculateAreaArrow(10, 5));
console.log(calculatePerimeterArrow(10, 5));


9. Practice questions — solve yourself
Do not copy the solutions. Write each function independently.
10 practice questions
Level 1 — Fundamentals
1. Create a function expression add(a, b) that returns the sum.
2. Convert multiply(a, b) into an arrow function.
3. Create an arrow function square(number) using implicit return.
4. Create an arrow function greet(name) that returns a greeting.
Level 2 — Application
5. Create normal and arrow functions to calculate the area of a rectangle.
6. Create normal and arrow functions to calculate the perimeter of a rectangle.
7. Create a function expression isEven(number) that returns true or false.
Level 3 — Understanding
8. Explain why a function expression assigned to const cannot be called before initialization.
9. Explain the difference between this in a normal function and an arrow function.
10. In a browser, explain the difference between window, var, and let at the global level.
10. Output prediction test
Predict the output before running each program.

Q1
const add = (a, b) => a + b;

console.log(add(5, 10));


Q2
const square = number => number * number;

console.log(square(6));


Q3
const greet = function () {
    return "Hello";
};

console.log(greet());


Q4
function test() {
    return this;
}

console.log(typeof test());


For Q4, assume a browser's classic non-strict script.

Q5
const user = {
    name: "Keerthi",
    greet: () => this.name
};

console.log(user.greet());


Explain why the result is not necessarily "Keerthi".
11. Official learning resources
Follow these in order:
1. MDN — Functions
2. MDN — Function expressions
3. MDN — Arrow functions
4. Namaste JavaScript — Akshay Saini: Shortest JS Program, Window and This Keyword.