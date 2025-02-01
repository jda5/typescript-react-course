// A type alias called 'Role' which can only be one of the three string literals: 'admin', 'editor', or 'user'.
type Role = 'admin' | 'editor' | 'user';

// Here we declare a variable 'roles' that is an array of 'Role'. 
// We could also write this as 'let roles: Role[];'
let roles: Array<Role>;

// We assign an array of valid roles to our 'roles' variable. 
// If we tried to add a string that wasn't 'admin', 'editor', or 'user', TypeScript would throw an error.
roles = ['admin', 'editor', 'admin', 'user'];

// A type alias for 'User' objects. Each user has an 'email', a 'password', and an 'isAdmin' property.
// Note the use of 'boolean' for true/false values in TypeScript (instead of 'bool').
type User = { 
  email: string, 
  password: string, 
  isAdmin: boolean 
}

// ----------------------------------------------------------------------------
// GENERICS
// ----------------------------------------------------------------------------

// Generics allow creating 'type variables' which can be used to create classes, 
// functions & type aliases that don't need to explicitly define the types that they use in advance.
// Generics make it easier to write reusable code that can work with multiple types.

// Here, we define a generic type alias called 'DataStorage'.
// 'T' is a generic type parameter which means 'DataStorage' can store any type of data. 
type DataStorage<T> = {
  // 'storage' is an array of type T (so it might be an array of strings, array of Users, etc.).
  storage: T[];

  // 'add' is a function that takes a parameter of type T and returns void (no return value).
  add: (data: T) => void;
};

// We create a 'DataStorage' object specialized for storing strings.
// So, wherever T is referenced in 'DataStorage', it is replaced by 'string'.
const textStorage: DataStorage<string> = {
  // Initialize an empty array of strings.
  storage: [],

  // The 'add' method takes a string and pushes it into the 'storage' array.
  add(data: string) {
    // The push() method adds new items to the end of an array and returns the new length.
    this.storage.push(data);
  },
};

// We create a 'DataStorage' object specialized for storing 'User' objects.
// Wherever T is referenced, it's replaced by 'User'.
const userStorage: DataStorage<User> = {
  // Initialize an empty array of 'User' objects.
  storage: [],

  // The 'add' method takes a 'User' and pushes it into the 'storage' array.
  add(data: User) {
    this.storage.push(data);
  },
};

// ----------------------------------------------------------------------------
// A GENERIC FUNCTION
// ----------------------------------------------------------------------------

// This generic function 'merge' takes two parameters of potentially different types, T and U.
// It returns a new object that merges the properties of both parameters using the spread operator.
function merge<T, U>(arg1: T, arg2: U) {
  // Return a new object containing all properties from 'arg1' and 'arg2'.
  // If there are overlapping properties, properties from 'arg2' will overwrite 'arg1' (typical spread behavior).
  return {
    ...arg1,
    ...arg2
  };
}

// We call the 'merge' function with two objects: one of type { name: string }, 
// and another of type { age: number }. TypeScript will infer that T is { name: string } 
// and U is { age: number }, so the returned object has both 'name' and 'age'.
const newUser = merge(
  { name: 'Jacob' },
  { age: 32 }
);

// 'newUser' is now an object: { name: 'Jacob', age: 32 }.
