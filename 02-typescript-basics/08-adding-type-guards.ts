// Define a type alias 'Role' that can only take specific string values: 'admin', 'editor', or 'user'.
type Role = 'admin' | 'editor' | 'user';

/**
 * Function to perform an action based on the provided action value and role.
 * 
 * @param action - Can be either a string or a number. The function will check the type.
 * @param role - Must be one of the predefined 'Role' types: 'admin', 'editor', or 'user'.
 */
function performAction(action: string | number, role: Role) {
    
    // Type Guard #1: Checking if the role is either 'admin' or 'editor'.
    // This ensures that only users with elevated permissions get a specific log message.
    if (role === 'admin' || role === 'editor') {
        console.log('Role is admin or editor.');
    }

    // Type Guard #2: Using the 'typeof' operator to check if 'action' is a string.
    // If 'action' is a string, we log a message. If it’s a number, this block is skipped.
    if (typeof action === 'string') {
        console.log('Action is a string.');
    }
}

// ----------------------------------------------------------------------------
// TYPE GUARDS & TYPE NARROWING
// ----------------------------------------------------------------------------

// Type Guards help TypeScript determine the actual type of a value at runtime, 
// allowing for safer operations on that value.

// 1. "typeof" Operator
//    - Used to check if a value is a primitive type (string, number, boolean, object, function, symbol, bigint).
//    - Example: `typeof action === 'string'` (as shown in our function).

// 2. "instanceof" Operator
//    - Used to check if an object is an instance of a specific class or constructor function.
//    - Example: `myDate instanceof Date` (true if myDate was created using `new Date()`).

// 3. "in" Operator
//    - Used to check if an object contains a specific property.
//    - Example: `'name' in user` (true if `user` has a property called 'name').
