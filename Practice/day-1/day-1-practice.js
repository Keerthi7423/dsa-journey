
/*
=========================================================
             JAVASCRIPT WEEK 1 — DAY 1
             VARIABLES & FUNDAMENTALS
=========================================================

Topics:
1. var, let, const
2. Reassignment and Redeclaration
3. Data Types
4. typeof
5. Arithmetic Operators
6. Type Conversion
7. NaN
8. Block Scope
9. Variable Shadowing
10. Hoisting
11. Temporal Dead Zone (TDZ)
12. == vs ===
13. Boolean Conversion
14. Mixed Type Operations

Instructions:
- Read each example.
- Uncomment and execute one section at a time.
- Predict the output before executing.
- Try the practice questions independently.
=========================================================
*/


// =======================================================
// SECTION 1 — VARIABLES: var, let, const
// =======================================================

// var
// var allows reassignment and redeclaration.

// var name = "Keerthi";
// var name = "Developer";
// name = "Frontend Developer";
// console.log(name);


// let
// let allows reassignment but not redeclaration
// within the same scope.

// let score = 50;
// score = 100;
// console.log(score);


// const
// const does not allow reassignment or redeclaration.

// const country = "India";
// console.log(country);

// country = "USA"; // TypeError


// =======================================================
// SECTION 2 — REASSIGNMENT & REDECLARATION
// =======================================================

// Example 1: var redeclaration

// var x = 10;
// var x = 20;
// console.log(x); // 20


// Example 2: let reassignment

// let y = 10;
// y = 20;
// console.log(y); // 20


// Example 3: let redeclaration

// let z = 10;
// let z = 20; // SyntaxError in the same scope


// Example 4: const reassignment

// const a = 10;
// a = 20; // TypeError


// =======================================================
// SECTION 3 — DATA TYPES
// =======================================================

// String

// let name = "Keerthi";
// console.log(typeof name); // string


// Number

// let age = 24;
// console.log(typeof age); // number


// Boolean

// let isDeveloper = true;
// console.log(typeof isDeveloper); // boolean


// Undefined

// let city;
// console.log(city); // undefined
// console.log(typeof city); // undefined


// Null

// let data = null;
// console.log(data); // null
// console.log(typeof data); // object (historical JavaScript quirk)


// =======================================================
// SECTION 4 — TYPEOF
// =======================================================

// console.log(typeof "Hello");    // string
// console.log(typeof 100);        // number
// console.log(typeof true);       // boolean
// console.log(typeof undefined);  // undefined
// console.log(typeof null);       // object
// console.log(typeof NaN);        // number


// =======================================================
// SECTION 5 — ARITHMETIC OPERATORS
// =======================================================

// Addition

// console.log(10 + 5); // 15


// Subtraction

// console.log(10 - 5); // 5


// Multiplication

// console.log(10 * 5); // 50


// Division

// console.log(10 / 5); // 2


// Modulus (remainder)

// console.log(10 % 3); // 1


// Exponentiation

// console.log(2 ** 3); // 8


// Operator precedence

// console.log(8 + 4 * 3 - 2); // 18


// =======================================================
// SECTION 6 — TYPE CONVERSION
// =======================================================

// String to Number

// let value = "50";
// let result = Number(value);

// console.log(result);        // 50
// console.log(typeof result);  // number


// Number to String

// let number = 100;
// let converted = String(number);

// console.log(converted);        // "100"
// console.log(typeof converted);  // string


// Invalid Number Conversion

// let invalid = Number("hello");

// console.log(invalid);        // NaN
// console.log(typeof invalid);  // number


// =======================================================
// SECTION 7 — NaN (NOT A NUMBER)
// =======================================================

// let result = Number("hello");

// console.log(result);        // NaN
// console.log(typeof result);  // number


// =======================================================
// SECTION 8 — BLOCK SCOPE
// =======================================================

// let outside = 10;

// {
//     let inside = 20;
//     console.log(inside); // 20
// }

// console.log(outside); // 10

// console.log(inside); // ReferenceError


// =======================================================
// SECTION 9 — VARIABLE SHADOWING
// =======================================================

// let x = 10;

// {
//     let x = 20;
//     console.log(x); // 20
// }

// console.log(x); // 10


// =======================================================
// SECTION 10 — NESTED BLOCK SCOPE
// =======================================================

// let x = 10;

// {
//     let x = 20;

//     {
//         let x = 30;
//         console.log(x); // 30
//     }

//     console.log(x); // 20
// }

// console.log(x); // 10


// =======================================================
// SECTION 11 — HOISTING WITH VAR
// =======================================================

// console.log(a); // undefined
// var a = 10;
// console.log(a); // 10


// Conceptually, JavaScript behaves roughly like:

// var a;
// console.log(a); // undefined
// a = 10;
// console.log(a); // 10


// =======================================================
// SECTION 12 — TEMPORAL DEAD ZONE (TDZ)
// =======================================================

// console.log(a); // ReferenceError
// let a = 10;


// console.log(b); // ReferenceError
// const b = 20;


// =======================================================
// SECTION 13 — == VS ===
// =======================================================

// Loose equality

// console.log(5 == "5"); // true


// Strict equality

// console.log(5 === "5"); // false


// console.log(10 == 10);   // true
// console.log(10 === 10);  // true


// Best practice:
// Use === in most situations.


// =======================================================
// SECTION 14 — BOOLEAN CONVERSION
// =======================================================

// console.log(Boolean(""));       // false
// console.log(Boolean("hello"));  // true
// console.log(Boolean(0));        // false
// console.log(Boolean(1));        // true
// console.log(Boolean(null));     // false
// console.log(Boolean(undefined));// false


// =======================================================
// SECTION 15 — MIXED TYPE OPERATIONS
// =======================================================

// let a = "10";
// let b = 5;

// console.log(a + b); // "105"
// console.log(a - b); // 5
// console.log(a * b); // 50
// console.log(a / b); // 2


// =======================================================
// SECTION 16 — EASY PRACTICE
// =======================================================

// Q1:
// Which keyword allows reassignment but not
// redeclaration in the same scope?

// A) var
// B) let
// C) const
// D) All three


// Q2:

// let age = 25;
// console.log(typeof age);

// A) string
// B) number
// C) boolean
// D) undefined


// Q3:

// let score = 50;
// score = 100;
// score = 150;
// console.log(score);

// A) 50
// B) 100
// C) 150
// D) Error


// Q4:

// console.log(8 + 4 * 3 - 2);

// A) 34
// B) 18
// C) 22
// D) 10


// Q5:

// let value = "50";
// let result = Number(value);

// console.log(typeof result);
// console.log(result + 10);

// A) string, 5010
// B) number, 60
// C) number, 5010
// D) string, 60


// =======================================================
// SECTION 17 — MEDIUM PRACTICE
// =======================================================

// Q1:

// var x = 10;
// var x = 20;
// console.log(x);

// A) SyntaxError
// B) 10
// C) 20
// D) undefined


// Q2:

// console.log(typeof null);

// A) null
// B) object
// C) undefined
// D) number


// Q3:

// let x = 10;

// {
//     let x = 20;
//     console.log(x);
// }

// console.log(x);

// A) 20 then 20
// B) 10 then 20
// C) 20 then 10
// D) SyntaxError


// Q4:

// console.log(5 == "5");
// console.log(5 === "5");

// A) true, true
// B) false, false
// C) true, false
// D) false, true


// Q5:

// let result = Number("hello");

// console.log(result);
// console.log(typeof result);

// A) Error, undefined
// B) NaN, number
// C) NaN, NaN
// D) hello, string


// =======================================================
// SECTION 18 — HARD PRACTICE
// =======================================================

// Q1:

// console.log(a);
// var a = 10;
// console.log(a);

// A) 10 then 10
// B) undefined then 10
// C) ReferenceError
// D) SyntaxError


// Q2:

// console.log(a);
// let a = 10;

// A) 10
// B) undefined
// C) ReferenceError
// D) SyntaxError


// Q3:

// let x = 10;

// {
//     let x = 20;

//     {
//         let x = 30;
//         console.log(x);
//     }

//     console.log(x);
// }

// console.log(x);

// A) 30, 20, 10
// B) 10, 20, 30
// C) 30, 30, 30
// D) SyntaxError


// Q4:

// console.log(Boolean(""));
// console.log(Boolean("hello"));
// console.log(Boolean(0));
// console.log(Boolean(1));

// A) true, true, false, false
// B) false, true, false, true
// C) false, false, true, true
// D) Error


// Q5:

// let a = "10";
// let b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);

// A) 15, 5, 50
// B) 105, 5, 50
// C) 105, 105, 105
// D) Error


// =======================================================
// SECTION 19 — ADDITIONAL PRACTICE
// =======================================================

// Q1: What is the output?

// let num = 10;
// num += 5;
// console.log(num);


// Q2: What is the output?

// let a = 10;
// let b = "10";

// console.log(a == b);
// console.log(a === b);


// Q3: What is the output?

// console.log(typeof NaN);


// Q4: What is the output?

// let x = 5;
// {
//     let x = 15;
//     x = 25;
//     console.log(x);
// }
// console.log(x);


// Q5: What is the output?

// console.log(Number("20") + Number("30"));


// Q6: What is the output?

// console.log("5" * 2);


// Q7: What is the output?

// console.log("5" + 2);


// Q8: What is the output?

// console.log(Boolean("0"));
// console.log(Boolean(0));


// Q9: What is the output?

// var a = 1;
// var a = 2;
// console.log(a);


// Q10: What is the output?

// let a = 10;

// {
//     let a = 50;
//     console.log(a);
// }

// console.log(a);


// =======================================================
// SECTION 20 — ANSWER KEY
// =======================================================

// EASY:
// Q1: B
// Q2: B
// Q3: C
// Q4: B
// Q5: B


// MEDIUM:
// Q1: C
// Q2: B
// Q3: C
// Q4: C
// Q5: B


// HARD:
// Q1: B
// Q2: C
// Q3: A
// Q4: B
// Q5: B


// ADDITIONAL PRACTICE:
// Q1: 15
// Q2: true, false
// Q3: number
// Q4: 25 then 5
// Q5: 50
// Q6: 10
// Q7: 52
// Q8: true, false
// Q9: 2
// Q10: 50 then 10


/*
=========================================================
                  DAY 1 COMPLETE
=========================================================

YOUR TARGET:

1. Understand every topic.
2. Predict outputs before running code.
3. Practice without copying.
4. Revisit incorrect answers.
5. Be able to explain each concept in your own words.

Don't just memorize JavaScript.

UNDERSTAND HOW JAVASCRIPT WORKS.

=========================================================
*/
