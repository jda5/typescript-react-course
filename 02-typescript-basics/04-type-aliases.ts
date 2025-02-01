// ----------------------------------------------------------------------------
// TYPE ALIASES IN TYPESCRIPT
// ----------------------------------------------------------------------------

// The 'type' keyword in TypeScript allows you to define **aliases** for types.
// These aliases give meaningful names to complex types, making code more readable and reusable.
// You can use type aliases for **primitives, objects, functions, unions, and tuples**.

// ----------------------------------------------------------------------------
// FUNCTION TYPE ALIAS
// ----------------------------------------------------------------------------

// We define a function type alias 'AddFn'.
// This alias represents a function that takes two 'number' parameters and returns a 'number'.
type AddFn = (a: number, b: number) => number;

// Now we can use 'AddFn' as a type when defining functions that match this signature.
function calculate(
    a: number,
    b: number,
    calculateFunction: AddFn // 'calculateFunction' must be a function that matches 'AddFn'
): number {
    return calculateFunction(a, b);
}

// ✅ Valid usage: Passing a function that matches 'AddFn'.
console.log(calculate(10, 5, (x, y) => x + y)); // Output: 15

// ❌ Invalid usage:
// console.log(calculate(10, 5, "add")); // ERROR: 'string' is not a function.

// ----------------------------------------------------------------------------
// UNION TYPE ALIAS
// ----------------------------------------------------------------------------

// A 'union type' allows a variable to hold more than one type.
// Here, 'StringOrNum' can be either a 'string' OR a 'number'.
type StringOrNum = string | number;

// Declaring a variable 'userID' that can be either a string or a number.
let userID: StringOrNum = 'abc123'; // ✅ Valid
userID = 456; // ✅ Valid

// ❌ Invalid usage:
// userID = true; // ERROR: Type 'boolean' is not assignable to type 'string | number'.

// ----------------------------------------------------------------------------
// OBJECT TYPE ALIAS
// ----------------------------------------------------------------------------

// We can use a type alias to define the structure of an object.
// Here, 'User' represents a user object with specific properties.

type User = {
    name: string;        // 'name' must be a string.
    age: number;         // 'age' must be a number.
    userID: StringOrNum; // 'userID' can be a string OR a number (thanks to the alias).
    isAdmin: boolean;    // 'isAdmin' is a boolean indicating admin privileges.
};

// ----------------------------------------------------------------------------
// ARRAY OF USERS
// ----------------------------------------------------------------------------

// Declaring an array 'users' that holds multiple 'User' objects.
let users: User[];

// ✅ Valid assignment:
users = [
    { name: "Alice", age: 30, userID: "abc001", isAdmin: false },
    { name: "Bob", age: 25, userID: 123456, isAdmin: true }
];

// ❌ Invalid assignment (missing required properties):
// users = [{ name: "Charlie", age: 40 }]; // ERROR: 'userID' and 'isAdmin' are missing.

// ----------------------------------------------------------------------------
// KEY BENEFITS OF TYPE ALIASES
// ----------------------------------------------------------------------------

// 1️⃣ **Improves Code Readability**
//    - Instead of writing `(a: number, b: number) => number` everywhere, we use 'AddFn'.
//    - Instead of writing `{ name: string, age: number, ... }` everywhere, we use 'User'.

// 2️⃣ **Reusability**
//    - Once defined, we can use a type alias multiple times in different parts of the code.

// 3️⃣ **Maintains Consistency**
//    - Ensures that objects and variables follow a specific shape or set of rules.

// 4️⃣ **Supports Unions & Function Types**
//    - Type aliases are flexible and can define **union types** (e.g., `string | number`).
//    - Type aliases can also define **function signatures** (e.g., `type AddFn = (a: number, b: number) => number`).

