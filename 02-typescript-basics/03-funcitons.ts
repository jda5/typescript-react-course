// ----------------------------------------------------------------------------
// FUNCTION SYNTAX IN TYPESCRIPT
// ----------------------------------------------------------------------------

// The general structure for a function in TypeScript is:
// function functionName(parameters): returnType {
//     // function body
// }

// TypeScript enforces that function parameters and return types match the specified types.

// ----------------------------------------------------------------------------
// FUNCTION WITH A VOID RETURN TYPE
// ----------------------------------------------------------------------------

// 'void' is used when a function **does not return a value**.
// It means the function performs an action (e.g., logging to console) but does not produce a returnable result.

function add(a: number, b: number): void {
    const result = a + b;  // `result` is inferred as a number.
    console.log(result);    // The function prints the result but does not return anything.
}

// ❌ Invalid usage:
// const sum = add(2, 3); // ERROR: 'sum' will be 'undefined' since 'add' does not return anything.

// ----------------------------------------------------------------------------
// FUNCTION WITH AN EXPLICIT RETURN TYPE
// ----------------------------------------------------------------------------

// This function takes two objects, each with an 'age' property (a number).
// It multiplies their ages and returns the result as a string.
function product(a: { age: number }, b: { age: number }): string {
    return String(a.age * b.age); // Convert the product to a string before returning.
}

// ✅ Valid usage:
console.log(product({ age: 2 }, { age: 4 })); // Output: "8"

// ❌ Invalid usage:
// console.log(product({ age: "2" }, { age: 4 }));  // ERROR: 'age' must be a number.

// ----------------------------------------------------------------------------
// HIGHER-ORDER FUNCTIONS (PASSING A FUNCTION AS A PARAMETER)
// ----------------------------------------------------------------------------

// A function in TypeScript can accept another function as a parameter.
// This allows for flexible, reusable code (also known as a **higher-order function**).

// Here, 'calculate' accepts three parameters:
// 1️⃣ `a: number` → First number
// 2️⃣ `b: number` → Second number
// 3️⃣ `calculateFunction: (a: number, b: number) => number`
//    → A function that takes two numbers and returns a number.

function calculate(
    a: number, 
    b: number, 
    calculateFunction: (a: number, b: number) => number // Function type signature
): number {
    return calculateFunction(a, b); // Call the function passed as an argument.
}

// ----------------------------------------------------------------------------
// EXAMPLE FUNCTION TO BE PASSED AS A CALLBACK
// ----------------------------------------------------------------------------

// A function that divides two numbers and returns the result.
function divide(a: number, b: number): number {
    return a / b;
}

// ----------------------------------------------------------------------------
// USING THE HIGHER-ORDER FUNCTION
// ----------------------------------------------------------------------------

// ✅ Valid usage:
console.log(calculate(12, 3, divide)); // Output: 4

// ❌ Invalid usage:
// console.log(calculate(12, 3, "divide"));  // ERROR: Argument of type 'string' is not assignable to function type.
// console.log(calculate(12, 3, (x, y) => x + y)); // ✅ Also valid: We can pass inline arrow functions!

// ----------------------------------------------------------------------------
// KEY FUNCTION CONCEPTS IN TYPESCRIPT
// ----------------------------------------------------------------------------

// 1️⃣ **Void Return Type (`void`)**
//    - Used when a function does not return a value.
//    - Example: `function logMessage(): void { console.log("Hello"); }`.

// 2️⃣ **Explicit Return Types**
//    - A function can return a specific type like `string`, `number`, or even `object`.
//    - Example: `function getName(): string { return "Alice"; }`.

// 3️⃣ **Higher-Order Functions**
//    - Functions that accept another function as a parameter.
//    - Example: `calculate(10, 5, (a, b) => a * b);`.

// 4️⃣ **Function Type Annotations**
//    - A function type signature defines the expected structure of a function argument.
//    - Example: `(a: number, b: number) => number` means a function that takes two numbers and returns a number.

