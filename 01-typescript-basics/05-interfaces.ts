// ----------------------------------------------------------------------------
// INTERFACES
// ----------------------------------------------------------------------------

// Interfaces in TypeScript define the structure (or shape) of an object.
// They specify the required properties and their types but do not provide implementations.
interface Credentials {
    password: string;  // A required string property for the user's password.
    email: string;     // A required string property for the user's email.
}

// ----------------------------------------------------------------------------
// EXTENDING INTERFACES
// ----------------------------------------------------------------------------

// You can extend an existing interface by redeclaring it with additional properties.
// This allows incremental modifications without modifying the original interface.
// Example: If we were to uncomment this, 'mode' would become a required property.
// 
// interface Credentials {
//     mode: string;
// }

// ----------------------------------------------------------------------------
// USING AN INTERFACE TO DEFINE AN OBJECT
// ----------------------------------------------------------------------------

// Declare a variable of type 'Credentials' which must conform to the interface.
let credentials: Credentials;

// Assign a valid object to 'credentials' (must contain 'email' and 'password').
credentials = {
    email: 'hello@example.com',   // Email must be a string.
    password: 'Password1'         // Password must be a string.
};

// ----------------------------------------------------------------------------
// TYPE ALIASES
// ----------------------------------------------------------------------------

// A 'type alias' can also be used to define an object's structure, similar to an interface.
type CredentialsType = {
    password: string;
    email: string;
}

// Key Differences Between Interfaces and Type Aliases:
// - **Interfaces** can be reopened and extended (as shown above).
// - **Type aliases** cannot be reopened but can define **unions, primitives, and tuples**.

// ----------------------------------------------------------------------------
// USING TYPE ALIASES FOR DIFFERENT DATA TYPES
// ----------------------------------------------------------------------------

// 1. A primitive type alias (useful for making code more readable).
type Name = string;

// 2. Type aliases for objects.
type PartialPointX = { x: number; };  // Defines an object with an 'x' coordinate.
type PartialPointY = { y: number; };  // Defines an object with a 'y' coordinate.

// 3. A union type (can be either PartialPointX OR PartialPointY, but not necessarily both).
type PartialPoint = PartialPointX | PartialPointY;

// Example usage:
const point1: PartialPoint = { x: 5 };  // Valid because it has an 'x' property.
const point2: PartialPoint = { y: 10 }; // Valid because it has a 'y' property.
// const point3: PartialPoint = { x: 5, y: 10 };  // ❌ Error: Must be one or the other, not both.

// 4. A tuple type (a fixed-length array with specific types in a defined order).
type Data = [number, string];

// Example usage:
const exampleData: Data = [42, "Hello"];  // ✅ Valid
// const invalidData: Data = ["Hello", 42];  // ❌ Error: Wrong order (expects number, then string)

// ----------------------------------------------------------------------------
// IMPLEMENTING AN INTERFACE WITH A CLASS
// ----------------------------------------------------------------------------

// A class can "implement" an interface, which means it must include all required properties.
// However, TypeScript interfaces do not enforce implementation of methods.

class AuthCredentials implements Credentials {
    email: string;       // Required property from Credentials interface.
    password: string;    // Required property from Credentials interface.

    userName: string;    // An additional property (not required by Credentials).

    constructor(email: string, password: string, userName: string) {
        this.email = email;
        this.password = password;
        this.userName = userName;
    }
}

// ----------------------------------------------------------------------------
// USING AN INTERFACE AS A FUNCTION PARAMETER
// ----------------------------------------------------------------------------

// This function expects an argument that matches the 'Credentials' interface.
function login(credentials: Credentials) {
    console.log('Logged in!');
}

// ----------------------------------------------------------------------------
// PASSING AN OBJECT OF A CLASS THAT IMPLEMENTS AN INTERFACE
// ----------------------------------------------------------------------------

// Even though 'AuthCredentials' has additional properties (like userName),
// it still matches the 'Credentials' interface because it has 'email' and 'password'.

login(new AuthCredentials("test@example.com", "securePass", "testUser"));
// ✅ This works because AuthCredentials provides 'email' and 'password', fulfilling the interface.
