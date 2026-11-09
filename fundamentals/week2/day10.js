
/*
DAY 10 - JAVASCRIPT SCOPE AND HOISTING
Topics:
1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope
5. Lexical Environment
6. Scope Chain
7. Hoisting
8. Undefined vs Not Defined
9. Temporal Dead Zone

Author: Keerthi
*/

// ==========================================
// 1. GLOBAL SCOPE
// ==========================================

let company = "SkySecure";

function displayCompany() {
    console.log(company);
}

displayCompany();
console.log(company);


// ==========================================
// 2. FUNCTION SCOPE
// ==========================================

function displayAge() {
    let age = 24;
    console.log(age);
}

displayAge();

// console.log(age); // ReferenceError


// ==========================================
// 3. BLOCK SCOPE
// ==========================================

{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);

// console.log(b); // ReferenceError
// console.log(c); // ReferenceError


// ==========================================
// 4. LEXICAL SCOPE
// ==========================================

let firstName = "Keerthi";

function outer() {
    let age = 24;

    function inner() {
        console.log(firstName);
        console.log(age);
    }

    inner();
}

outer();


// ==========================================
// 5. SCOPE CHAIN
// ==========================================

let x = 100;

function parent() {
    let y = 200;

    function child() {
        let z = 300;

        console.log(x);
        console.log(y);
        console.log(z);
    }

    child();
}

parent();


// ==========================================
// 6. HOISTING WITH VAR
// ==========================================

console.log(varExample);

var varExample = 10;


// ==========================================
// 7. HOISTING WITH LET AND CONST
// ==========================================

// Uncomment and run separately to observe the error.

// console.log(letExample);
// let letExample = 20;

// console.log(constExample);
// const constExample = 30;


// ==========================================
// 8. FUNCTION DECLARATION HOISTING
// ==========================================

greet();

function greet() {
    console.log("Hello JavaScript");
}


// ==========================================
// 9. FUNCTION EXPRESSION HOISTING
// ==========================================

// Uncomment and run separately.

// sayHello();

// var sayHello = function () {
//     console.log("Hello");
// };


// ==========================================
// 10. UNDEFINED
// ==========================================

let userName;

console.log(userName);


// ==========================================
// 11. TEMPORAL DEAD ZONE
// ==========================================

// Uncomment and run separately.

// console.log(city);
// let city = "Bengaluru";


// ==========================================
// 12. OUTPUT PREDICTION PRACTICE
// Predict each output before uncommenting.
// Run each question separately if it throws an error.
// ==========================================

// Q1
// console.log(a);
// var a = 10;

// Q2
// console.log(a);
// let a = 10;

// Q3
// console.log(a);
// const a = 20;

// Q4
// greet();
// function greet() {
//     console.log("Hello");
// }

// Q5
// greet();
// var greet = function () {
//     console.log("Hello");
// };

// Q6
// var a = 10;
// {
//     var a = 20;
// }
// console.log(a);

// Q7
// let a = 10;
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);

// Q8
// let a = 10;
// function test() {
//     let b = 20;
//     console.log(a + b);
// }
// test();

// Q9
// function test() {
//     let x = 10;
// }
// test();
// console.log(x);

// Q10
// let a = 100;
// function outer() {
//     let a = 200;
//     function inner() {
//         console.log(a);
//     }
//     inner();
// }
// outer();

// Q11
// let x;
// console.log(x);

// Q12
// console.log(myAge);

// Q13
// let a = 10;
// {
//     let a = 20;
//     {
//         let a = 30;
//         console.log(a);
//     }
// }

// Q14
// var x = 1;
// function test() {
//     console.log(x);
//     var x = 2;
// }
// test();

// Q15
// let x = 5;
// function test() {
//     let x = 10;
//     console.log(x);
// }
// test();
// console.log(x);
