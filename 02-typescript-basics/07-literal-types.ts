// ----------------------------------------------------------------------------
// LITERAL TYPES IN TYPESCRIPT
// ----------------------------------------------------------------------------

// TypeScript's **literal types** allow you to specify exact values 
// that a variable can hold. This makes your code **more predictable** 
// and **prevents invalid assignments**.

// ----------------------------------------------------------------------------
// DEFINING A LITERAL TYPE
// ----------------------------------------------------------------------------

// Here, 'role' can ONLY be one of the specified string values: 'admin', 'editor', or 'user'.
// This is a **union of string literals**, meaning 'role' must match exactly one of these values.
let role: 'admin' | 'editor' | 'user';

// ✅ Valid assignments:
role = 'admin';  // ✔ Allowed
role = 'editor'; // ✔ Allowed
role = 'user';   // ✔ Allowed

// ❌ Invalid assignment:
// role = 'base';  // ERROR: Type '"base"' is not assignable to type '"admin" | "editor" | "user"'.

// ----------------------------------------------------------------------------
// WHY USE LITERAL TYPES?
// ----------------------------------------------------------------------------

// 1️⃣ **Prevents Invalid Values**
//    - Ensures a variable can only be assigned a predefined set of values.
//    - Example: `role: 'admin' | 'editor' | 'user'` prevents accidental typos like `"Admin"` or `"user123"`.

// 2️⃣ **Improves Code Readability & Maintainability**
//    - Makes the expected values explicit, making the code easier to understand.
//    - Developers immediately know what values are valid for 'role'.

// 3️⃣ **Great for Enums and Configurations**
//    - Useful when defining categories, roles, or statuses (e.g., `"pending" | "approved" | "rejected"`).

// ----------------------------------------------------------------------------
// EXTENDING LITERAL TYPES WITH TYPE ALIASES
// ----------------------------------------------------------------------------

// Instead of defining a literal type inline, we can create a reusable type alias:
type Role = 'admin' | 'editor' | 'user';

// Now, we can use 'Role' instead of repeating the literals everywhere.
let userRole: Role = 'admin';

// ❌ Invalid assignment:
// userRole = 'moderator'; // ERROR: Type '"moderator"' is not assignable to type 'Role'.

// ----------------------------------------------------------------------------
// COMBINING LITERAL TYPES WITH OBJECTS
// ----------------------------------------------------------------------------

// We can use literal types inside object definitions to enforce specific values:
type User = {
    name: string;
    role: Role;
};

// ✅ Valid user object:
const adminUser: User = {
    name: 'Jacob',
    role: 'admin', // ✔ Allowed
};

// ❌ Invalid user object:
// const unknownUser: User = { name: 'Alice', role: 'moderator' }; 
// ERROR: Type '"moderator"' is not assignable to type '"admin" | "editor" | "user"'.

// ----------------------------------------------------------------------------
// KEY TAKEAWAYS ON LITERAL TYPES
// ----------------------------------------------------------------------------

// 1️⃣ **Limits values to a specific set of options**.
//    - Example: `role: 'admin' | 'editor' | 'user'` ensures only valid roles are assigned.

// 2️⃣ **Improves Type Safety and Prevents Errors**.
//    - Prevents accidental typos and invalid values.

// 3️⃣ **Can be used inside Type Aliases & Objects**.
//    - Example: `type Role = 'admin' | 'editor' | 'user';`

// 4️⃣ **Useful in Enums, Configurations, and Status Indicators**.
//    - Example: `type Status = 'pending' | 'approved' | 'rejected';`

