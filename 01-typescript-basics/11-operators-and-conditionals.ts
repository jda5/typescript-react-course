// ----------------------------------------------------------------------------
// OPERATORS IN TYPESCRIPT
// ----------------------------------------------------------------------------

// Operators are symbols that perform operations on values or variables.
// TypeScript supports several categories of operators:

// 1️⃣ Arithmetic Operators (+, -, *, /, %, **)
// 2️⃣ Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
// 3️⃣ Logical Operators (&&, ||, !)
// 4️⃣ Assignment Operators (=, +=, -=, *=, /=, %=, **=)
// 5️⃣ Bitwise Operators (&, |, ^, <<, >>, >>>)
// 6️⃣ Ternary Operator (? :)
// 7️⃣ Nullish Coalescing Operator (??)

// ----------------------------------------------------------------------------
// 1️⃣ ARITHMETIC OPERATORS
// ----------------------------------------------------------------------------

let a: number = 10;
let b: number = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus (Remainder): 1
console.log(a ** b); // Exponentiation: 10^3 = 1000

// ----------------------------------------------------------------------------
// 2️⃣ COMPARISON OPERATORS
// ----------------------------------------------------------------------------

// Comparison operators return a boolean value (true or false).

console.log(a > b);   // true  (10 is greater than 3)
console.log(a < b);   // false (10 is not less than 3)
console.log(a >= 10); // true  (10 is greater than or equal to 10)
console.log(a <= 5);  // false (10 is not less than or equal to 5)

// **Equality vs. Strict Equality**
console.log(a == "10");  // true  (loose equality, type coercion happens)
console.log(a === "10"); // false (strict equality, types must match)

// **Inequality vs. Strict Inequality**
console.log(a != "10");  // false (loose inequality, type coercion happens)
console.log(a !== "10"); // true  (strict inequality, types must match)

// ----------------------------------------------------------------------------
// 3️⃣ LOGICAL OPERATORS
// ----------------------------------------------------------------------------

// Logical operators work with boolean values and expressions.

let isAdmin = true;
let isEditor = false;

// AND (&&) - Returns true if both conditions are true
console.log(isAdmin && isEditor); // false

// OR (||) - Returns true if at least one condition is true
console.log(isAdmin || isEditor); // true

// NOT (!) - Reverses the boolean value
console.log(!isAdmin); // false

// ----------------------------------------------------------------------------
// 4️⃣ ASSIGNMENT OPERATORS
// ----------------------------------------------------------------------------

let x = 10;
x += 5; // Same as x = x + 5
console.log(x); // 15

x -= 2; // x = x - 2
console.log(x); // 13

x *= 2; // x = x * 2
console.log(x); // 26

x /= 2; // x = x / 2
console.log(x); // 13

x %= 4; // x = x % 4
console.log(x); // 1

x **= 2; // x = x ** 2 (Exponentiation)
console.log(x); // 1 (because 1^2 is still 1)

// ----------------------------------------------------------------------------
// 5️⃣ BITWISE OPERATORS
// ----------------------------------------------------------------------------

// Bitwise operators work at the binary level.

let p = 5;  // 0101 in binary
let q = 3;  // 0011 in binary

console.log(p & q);  // AND: 0101 & 0011 = 0001 (1)
console.log(p | q);  // OR:  0101 | 0011 = 0111 (7)
console.log(p ^ q);  // XOR: 0101 ^ 0011 = 0110 (6)
console.log(p << 1); // Left shift: 1010 (10)
console.log(p >> 1); // Right shift: 0010 (2)

// ----------------------------------------------------------------------------
// 6️⃣ CONDITIONAL STATEMENTS (if-else, ternary, switch)
// ----------------------------------------------------------------------------

// 1️⃣ IF-ELSE STATEMENT
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else if (age > 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}

// 2️⃣ TERNARY OPERATOR (? :)
// A shorter way to write simple conditional statements.

let isEligible = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(isEligible); // "Eligible to vote"

// 3️⃣ SWITCH STATEMENT
// A switch statement is useful when checking multiple possible values.

let role: "admin" | "editor" | "user" = "editor";

switch (role) {
    case "admin":
        console.log("You have full access.");
        break;
    case "editor":
        console.log("You can edit content.");
        break;
    case "user":
        console.log("You can view content.");
        break;
    default:
        console.log("Invalid role.");
}

// ----------------------------------------------------------------------------
// 7️⃣ NULLISH COALESCING OPERATOR (??)
// ----------------------------------------------------------------------------

// The `??` operator is used to provide a default value when a variable is `null` or `undefined`.

let userName: string | null = null;
let defaultName = "Guest";

console.log(userName ?? defaultName); // "Guest"

// If userName were "Alice", it would print "Alice":
userName = "Alice";
console.log(userName ?? defaultName); // "Alice"

// ❌ This is different from `||` because `??` only checks for `null` or `undefined`
// whereas `||` treats falsy values (0, "", false, null, undefined) as false.

let input = 0;
console.log(input || "Default"); // "Default" (because 0 is falsy)
console.log(input ?? "Default"); // 0 (because 0 is not null or undefined)

