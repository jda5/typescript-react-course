// ----------------------------------------------------------------------------
// TYPE ALIASES & INTERSECTIONS
// ----------------------------------------------------------------------------

// Define a type alias 'Admin' that describes an object with a 'permissions' property.
// The 'permissions' property is an array of strings, representing allowed actions.
type Admin = {
    permissions: string[];
};

// Define a type alias 'User' that describes an object with a 'userName' property.
// The 'userName' property is a string representing the username.
type User = {
    userName: string;
};

// ----------------------------------------------------------------------------
// TYPE INTERSECTIONS (MERGING TYPES)
// ----------------------------------------------------------------------------

// We can create a new type that combines both 'Admin' and 'User' using '&' (intersection).
// This means an object of type 'AppAdmin' must include both 'permissions' and 'userName'.
type AppAdmin = Admin & User;

// ----------------------------------------------------------------------------
// USING THE INTERSECTION TYPE
// ----------------------------------------------------------------------------

// Creating an object of type 'AppAdmin'. This object must have both 'permissions' and 'userName'.
let admin: AppAdmin = {
    permissions: ['login'],  // ✅ 'permissions' from Admin type
    userName: 'jda5x'        // ✅ 'userName' from User type
};

// ----------------------------------------------------------------------------
// INTERFACE INHERITANCE (EXTENDING INTERFACES)
// ----------------------------------------------------------------------------

// Just like we used '&' to merge types, we can use 'extends' in interfaces to achieve the same result.

// Define an 'AdminInterface' similar to our 'Admin' type.
interface AdminInterface {
    permissions: Array<string>;  // Same as 'string[]', just a different syntax.
}

// Define a 'UserInterface' similar to our 'User' type.
interface UserInterface {
    userName: string;
}

// ----------------------------------------------------------------------------
// EXTENDING MULTIPLE INTERFACES
// ----------------------------------------------------------------------------

// 'AppAdminInterface' extends both 'AdminInterface' and 'UserInterface'.
// This means any object of type 'AppAdminInterface' must have BOTH 'permissions' and 'userName'.
interface AppAdminInterface extends AdminInterface, UserInterface {};

// ----------------------------------------------------------------------------
// KEY DIFFERENCES: INTERSECTIONS ('&') VS. EXTENDING INTERFACES ('extends')
// ----------------------------------------------------------------------------

// 1️⃣ **Type Intersections (`&`)**
// - Works with type aliases (`type`).
// - Merges multiple types into a single type.
// - Cannot be reopened (modified later).

// 2️⃣ **Interface Inheritance (`extends`)**
// - Works only with `interface`.
// - Can extend multiple interfaces at once.
// - Can be reopened (adding properties later).

// Both methods achieve the same result, but 'extends' is more flexible when working with interfaces,
// while '&' is better when merging various types.
