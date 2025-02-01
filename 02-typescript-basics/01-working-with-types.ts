// ----------------------------------------------------------------------------
// VARIABLE DECLARATION: CONST vs LET
// ----------------------------------------------------------------------------

// `const` creates a variable with a value that **cannot be reassigned** after its initial assignment.
// This is useful for values that should remain constant throughout the program.
const firstName = 'Jacob';

// ✅ firstName = 'John';  // ❌ ERROR: Cannot reassign a constant variable.


// `let` allows a variable to be reassigned later in the program.
// Unlike `const`, `let` enables us to update the value as needed.
let userName = 'jda5x';

// ----------------------------------------------------------------------------
// TYPE INFERENCE IN TYPESCRIPT
// ----------------------------------------------------------------------------

// TypeScript automatically infers `userName` as a string because it was assigned a string initially.
// Because of this, assigning a number to `userName` will cause an error.

userName = 34;  // ❌ ERROR: Type 'number' is not assignable to type 'string'.

// In JavaScript (without TypeScript), this would work, but in TypeScript, types are enforced at compile-time.

// ----------------------------------------------------------------------------
// THE `any` TYPE (DISABLES TYPE CHECKING)
// ----------------------------------------------------------------------------

// If a variable is declared without a type and without an initial value, TypeScript assigns it an implicit `any` type.
// This means the variable can hold any data type, and TypeScript won't enforce strict type checking.

let password;  // This implicitly has an `any` type.
password = 34;      // ✅ No error, even though this is a number.
password = "password";  // ✅ No error, even though we changed it to a string.

// Note: Using `any` defeats TypeScript’s type safety, so it's generally discouraged unless absolutely necessary.


// ----------------------------------------------------------------------------
// EXPLICITLY DECLARING TYPES
// ----------------------------------------------------------------------------

// We can explicitly declare a variable with a type, even if we don't assign a value immediately.
let age: number;

// ✅ Valid assignments:
age = 32;   // Number is allowed.

// ❌ Invalid assignment:
age = 'bronze';  // ❌ ERROR: Type 'string' is not assignable to type 'number'.

// ----------------------------------------------------------------------------
// WHY EXPLICIT TYPES ARE USEFUL?
// ----------------------------------------------------------------------------
// - Prevents accidental type mismatches.
// - Makes code more readable and self-documenting.
// - Helps TypeScript catch errors at compile-time rather than runtime.
