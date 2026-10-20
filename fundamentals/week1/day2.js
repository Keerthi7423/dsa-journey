
/* Day 2: Data Types, Strings and Type Conversion */

// 1. Data types
console.log("---- Data Types ----");

const age = 23;
const name = "Keerthi";
const isLearning = true;
const emptyValue = null;
let unknownValue;

console.log(typeof age);
console.log(typeof name);
console.log(typeof isLearning);
console.log(typeof emptyValue);
console.log(typeof unknownValue);

// 2. Arrays and objects
console.log("---- Arrays and Objects ----");

const skills = ["HTML", "CSS", "JavaScript"];
const developer = { name: "Keerthi", role: "Frontend Developer" };

console.log(typeof skills);
console.log(Array.isArray(skills));
console.log(typeof developer);

// 3. String operations
console.log("---- Strings ----");

const language = "JavaScript";

console.log(language.length);
console.log(language.toUpperCase());
console.log(language.slice(0, 4));
console.log(language.includes("Script"));

const greeting = `I am learning ${language}.`;
console.log(greeting);

// 4. Type conversion
console.log("---- Type Conversion ----");

console.log(Number("123"));
console.log(String(456));
console.log(parseInt("42px", 10));
console.log(Number("hello"));

// 5. Coercion and equality
console.log("---- Coercion ----");

console.log("5" + 2);
console.log("5" - 2);
console.log(5 == "5");
console.log(5 === "5");
