
# Day 10 – JavaScript Scope and Hoisting

**Author:** Keerthi  
**Language:** JavaScript  
**Topics:** Scope, Lexical Scope, Scope Chain, Hoisting, Undefined vs Not Defined, Temporal Dead Zone

---

## 1. What is Scope?

Scope determines where variables and functions can be accessed in JavaScript.

In simple words, scope tells us where a variable is available in our code.

```javascript
let name = "Keerthi";

function greet() {
    console.log(name);
}

greet();
console.log(name);
```

**Output:**
```text
Keerthi
Keerthi
```

The variable `name` is accessible inside the function because it is declared outside the function.

---

## 2. Types of Scope

### 2.1 Global Scope

A variable declared outside functions and blocks can be accessed from nested scopes.

```javascript
let company = "SkySecure";

function displayCompany() {
    console.log(company);
}

displayCompany();
console.log(company);
```

**Output:**
```text
SkySecure
SkySecure
```

Key points:
- Global variables can be accessed by nested scopes.
- Global scope is the outermost scope.
- Avoid unnecessary global variables.

### 2.2 Function Scope

Variables declared inside a function are accessible within that function.

```javascript
function displayAge() {
    let age = 24;
    console.log(age);
}

displayAge();

// console.log(age); // ReferenceError
```

**Output:**
```text
24
```

A variable declared inside a function cannot normally be accessed outside it.

### 2.3 Block Scope

A block is a section of code enclosed in `{ }`.

`let` and `const` are block-scoped. `var` is not block-scoped.

```javascript
{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10

// console.log(b); // ReferenceError
// console.log(c); // ReferenceError
```

| Declaration | Block-scoped? |
|---|---|
| var | No |
| let | Yes |
| const | Yes |

---

## 3. Lexical Scope

Lexical scope means a function's access to variables is determined by where the function is written in the source code.

```javascript
let a = 100;

function outer() {
    let b = 200;

    function inner() {
        let c = 300;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();
```

**Output:**
```text
100
200
300
```

Explanation:
- `inner()` accesses its own variable `c`.
- It accesses the outer function's variable `b`.
- It accesses the global variable `a`.

---

## 4. Lexical Environment

A lexical environment is an internal JavaScript mechanism that stores identifier bindings and maintains a reference to the enclosing lexical environment.

It helps JavaScript determine:
- Which variables exist in the current scope.
- What values those variables have.
- Where to search when a variable is not found locally.

```javascript
let name = "Keerthi";

function outer() {
    let age = 24;

    function inner() {
        console.log(name);
        console.log(age);
    }

    inner();
}

outer();
```

**Output:**
```text
Keerthi
24
```

The inner function can access variables from its enclosing lexical environment.

---

## 5. Scope Chain

The scope chain is the process JavaScript uses to search for a variable through the current scope and its outer lexical environments.

Search order:

1. Current scope.
2. Parent scope.
3. Next outer scope.
4. Global scope.

If JavaScript cannot find the variable, it throws a `ReferenceError`.

```javascript
let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();
```

**Output:**
```text
10
20
30
```

Important:
- Inner scopes can access outer scopes.
- Outer scopes cannot access variables declared only inside their child scopes.

---

## 6. Hoisting

Hoisting describes how JavaScript processes declarations during the creation phase of an execution context, before executing the code.

### 6.1 Hoisting with var

```javascript
console.log(a);

var a = 10;
```

**Output:**
```text
undefined
```

Conceptually:

```javascript
var a;

console.log(a);

a = 10;
```

The declaration is processed before execution, but the assignment remains in its original position.

### 6.2 Hoisting with let

```javascript
console.log(a);

let a = 10;
```

**Output:**
```text
ReferenceError: Cannot access 'a' before initialization
```

The binding is established during scope setup, but cannot be accessed before initialization.

### 6.3 Hoisting with const

```javascript
console.log(a);

const a = 10;
```

**Output:**
```text
ReferenceError: Cannot access 'a' before initialization
```

`const` behaves similarly to `let` regarding access before initialization. It must also be initialized when declared.

### 6.4 Function Declaration Hoisting

```javascript
greet();

function greet() {
    console.log("Hello Keerthi");
}
```

**Output:**
```text
Hello Keerthi
```

Function declarations can be called before their declaration appears in the code.

### 6.5 Function Expression Hoisting

```javascript
greet();

var greet = function () {
    console.log("Hello");
};
```

**Output:**
```text
TypeError: greet is not a function
```

Why?
- The `var` declaration is initialized with `undefined`.
- The function assignment has not happened yet.
- Calling `undefined` as a function causes a `TypeError`.

---

## 7. Undefined vs Not Defined

### 7.1 Undefined

A variable has been declared but has not yet been assigned a value.

```javascript
let name;

console.log(name);
```

**Output:**
```text
undefined
```

### 7.2 Not Defined

A variable has not been declared in the accessible scope.

```javascript
console.log(age);
```

**Output:**
```text
ReferenceError: age is not defined
```

| Undefined | Not Defined |
|---|---|
| Variable is declared | No accessible declaration exists |
| No value has been assigned | Variable cannot be found |
| Usually logs undefined | Throws ReferenceError |

---

## 8. Temporal Dead Zone (TDZ)

The Temporal Dead Zone is the period between entering a scope and initializing a `let` or `const` binding.

```javascript
{
    console.log(name);

    let name = "Keerthi";
}
```

**Output:**
```text
ReferenceError: Cannot access 'name' before initialization
```

After initialization:

```javascript
{
    let name = "Keerthi";

    console.log(name);
}
```

**Output:**
```text
Keerthi
```

Important:
- `let` and `const` are hoisted.
- They cannot be accessed before initialization.
- Accessing them during the TDZ throws a `ReferenceError`.

---

## 9. Difference Between var, let and const

| Feature | var | let | const |
|---|---|---|---|
| Scope | Function | Block | Block |
| Redeclaration in same scope | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Hoisted | Yes | Yes | Yes |
| Access before initialization | undefined | ReferenceError | ReferenceError |
| Must initialize at declaration | No | No | Yes |

---

## 10. Important Interview Points

1. Scope determines variable accessibility.
2. `var` is function-scoped.
3. `let` and `const` are block-scoped.
4. Lexical scope depends on where functions are written.
5. Scope chain searches from the current scope outwards.
6. Hoisting processes declarations before execution.
7. `var` is initialized with `undefined`.
8. `let` and `const` have a Temporal Dead Zone.
9. Function declarations can be called before their declaration.
10. Undefined and not defined are different.

---

## 11. Practice – 15 Output Prediction Questions

Predict the output before executing each program.

### Q1
```javascript
console.log(a);
var a = 10;
```

### Q2
```javascript
console.log(a);
let a = 10;
```

### Q3
```javascript
console.log(a);
const a = 20;
```

### Q4
```javascript
greet();

function greet() {
    console.log("Hello");
}
```

### Q5
```javascript
greet();

var greet = function () {
    console.log("Hello");
};
```

### Q6
```javascript
var a = 10;

{
    var a = 20;
}

console.log(a);
```

### Q7
```javascript
let a = 10;

{
    let a = 20;
    console.log(a);
}

console.log(a);
```

### Q8
```javascript
let a = 10;

function test() {
    let b = 20;
    console.log(a + b);
}

test();
```

### Q9
```javascript
function test() {
    let x = 10;
}

test();
console.log(x);
```

### Q10
```javascript
let a = 100;

function outer() {
    let a = 200;

    function inner() {
        console.log(a);
    }

    inner();
}

outer();
```

### Q11
```javascript
let x;

console.log(x);
```

### Q12
```javascript
console.log(myAge);
```

### Q13
```javascript
let a = 10;

{
    let a = 20;

    {
        let a = 30;
        console.log(a);
    }
}
```

### Q14
```javascript
var x = 1;

function test() {
    console.log(x);
    var x = 2;
}

test();
```

### Q15
```javascript
let x = 5;

function test() {
    let x = 10;
    console.log(x);
}

test();
console.log(x);
```

---

## 12. Learning Resources

- [MDN – Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN – Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [Namaste JavaScript – Akshay Saini](https://www.youtube.com/@akshaymarch7)

Watch:
1. Undefined vs Not Defined.
2. Scope Chain, Scope and Lexical Environment.

---

## 13. Day 10 Completion Checklist

- [ ] Understand global scope.
- [ ] Understand function scope.
- [ ] Understand block scope.
- [ ] Understand lexical scope.
- [ ] Understand lexical environment.
- [ ] Understand scope chain.
- [ ] Understand hoisting.
- [ ] Understand undefined vs not defined.
- [ ] Understand Temporal Dead Zone.
- [ ] Attempt all 15 output-prediction questions.
- [ ] Write notes in my own words.
- [ ] Push notes and JavaScript code to GitHub.

---

## Summary

Scope determines where variables can be accessed.

Lexical scope determines variable access based on where functions are written.

Scope chain searches for variables through outer lexical environments.

Hoisting describes how JavaScript processes declarations before execution.

Undefined means a variable exists but has no assigned value. Not defined means no accessible declaration exists.

Temporal Dead Zone prevents accessing `let` and `const` before initialization.

**Next topic: Day 11 – Loops + Functions.**
