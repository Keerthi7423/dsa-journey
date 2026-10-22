
/* Day 4: Conditional Statements */

// 1. Check whether a number is positive, negative, or zero
console.log("---- Number Check ----");

const number = -5;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 2. Check even or odd
console.log("---- Even or Odd ----");

const value = 14;

if (value % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3. Grade calculator
console.log("---- Grade Calculator ----");

const marks = 78;

if (marks < 0 || marks > 100) {
  console.log("Invalid marks");
} else if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 4. Nested conditions
console.log("---- Eligibility Check ----");

const age = 24;
const hasID = true;

if (age >= 18 && hasID) {
  console.log("Entry allowed");
} else {
  console.log("Entry denied");
}

// 5. Switch statement
console.log("---- Day of Week ----");

const day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
