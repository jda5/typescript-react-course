// ----------------------------------------------------------------------------
// PRIMITIVE TYPES IN TYPESCRIPT
// ----------------------------------------------------------------------------

// A primitive type is a basic data type that represents a single value.
// These types are immutable and are the building blocks of TypeScript programs.

// ----------------------------------------------------------------------------
// STRING TYPE
// ----------------------------------------------------------------------------

// A variable with an explicit 'string' type.
// This means that 'userName' can only hold string values.
const userName: string = 'jda5x';

// Here, 'password' is implicitly assigned the string literal type `'password'`.
// This means it can only ever hold the exact value `'password'` and nothing else.
let password: 'password';
// ✅ Valid: password = 'password';
// ❌ Invalid: password = 'secure123';  // ERROR: Type '"secure123"' is not assignable to type '"password"'.

// ----------------------------------------------------------------------------
// NUMBER TYPE
// ----------------------------------------------------------------------------

// TypeScript has a single 'number' type that supports both integers and floating-point numbers.
const userFavNumber = 3; // TypeScript infers this as a number.
let userAge: number = 34; // Explicitly defining a number type.

// ❌ Invalid assignment:
// userAge = "thirty-four";  // ERROR: Type 'string' is not assignable to type 'number'.

// ----------------------------------------------------------------------------
// BOOLEAN TYPE
// ----------------------------------------------------------------------------

// The 'boolean' type can hold only 'true' or 'false'.
const prod = false; // TypeScript infers this as a boolean.
let isValid: boolean = true; // Explicitly defining a boolean type.

// ----------------------------------------------------------------------------
// UNION TYPES (MULTIPLE POSSIBLE TYPES)
// ----------------------------------------------------------------------------

// A variable can hold more than one type by using the pipe '|' operator (union type).
let userID: string | number = 'abc1'; // Starts as a string.
userID = 123; // ✅ Valid: Can also be a number.

// ❌ Invalid assignment:
// userID = true;  // ERROR: Type 'boolean' is not assignable to type 'string | number'.

// ----------------------------------------------------------------------------
// OBJECT TYPE
// ----------------------------------------------------------------------------

// An 'object' in TypeScript is a collection of key-value pairs.
// Declaring a variable with type 'object' allows it to hold ANY object.
let userUnsafe: object;
userUnsafe = {
    name: 'Jacob',
    age: 34,
    isAdmin: true,
    id: 'abc', // Could also be 123
};
userUnsafe = {}; // ✅ Valid: Any object structure is allowed.

// ❌ Invalid assignment:
// userUnsafe = "Hello";  // ERROR: Type 'string' is not assignable to type 'object'.

// ----------------------------------------------------------------------------
// STRICTLY TYPED OBJECTS (SAFER APPROACH)
// ----------------------------------------------------------------------------

// Instead of using 'object', we can specify exactly which key-value pairs must be present.
let userSafe: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: number | string; // 'id' can be a number or a string.
};

// ✅ Valid assignment:
userSafe = {
    name: 'Jacob',
    age: 34,
    isAdmin: true,
    id: 123, // Can also be 'abc1'
};

// ❌ Invalid assignment (missing required properties):
// userSafe = { name: 'Jacob' };  // ERROR: Property 'age' is missing in type '{ name: string; }'.

// ----------------------------------------------------------------------------
// ARRAY TYPE
// ----------------------------------------------------------------------------

// Arrays in TypeScript are generic types and need to specify what type of values they contain.

// 1️⃣ Defining an array using 'Array<type>' (generic syntax).
let hobbies: Array<string>; // An array that can only contain strings.
hobbies = ['Sports', 'Cooking', 'Coding'];

// 2️⃣ Defining an array using 'type[]' (shorthand syntax).
let ages: number[]; // An array that can only contain numbers.
ages = [25, 30, 40];

// 3️⃣ An array of objects:
let users: object[];
users = [
    { name: 'Jacob', age: 34 },
    { name: 'Alice', age: 28 }
];

// ❌ Invalid assignment (wrong data type in array):
// ages = [25, "thirty"];  // ERROR: Type 'string' is not assignable to type 'number'.

// ----------------------------------------------------------------------------
// OVERVIEW OF OTHER COMMON PRIMITIVE TYPES IN TYPESCRIPT
// ----------------------------------------------------------------------------

// 1️⃣ BIGINT: Used for very large numbers (larger than JavaScript's safe integer limit).
let bigNumber: bigint = 9007199254740991n;

// 2️⃣ SYMBOL: A unique and immutable value often used as object keys.
let uniqueKey: symbol = Symbol('key');

// 3️⃣ UNDEFINED: A variable that has been declared but not assigned a value.
let notDefined: undefined;

// 4️⃣ NULL: Represents an explicitly empty value.
let emptyValue: null = null;

// 5️⃣ VOID: Used for functions that do not return a value.
function logMessage(): void {
    console.log("This function returns nothing.");
}

// 6️⃣ NEVER: Represents a value that never occurs (used in functions that always throw an error).
function throwError(): never {
    throw new Error("This function never returns.");
}
