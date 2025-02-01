// ----------------------------------------------------------------------------
// LOOPS IN TYPESCRIPT
// ----------------------------------------------------------------------------

// Loops allow us to execute a block of code repeatedly until a specified 
// condition is met. TypeScript supports all standard JavaScript loops 
// with added type safety and improved iterability.

// ----------------------------------------------------------------------------
// 1️⃣ FOR LOOP (Traditional)
// ----------------------------------------------------------------------------

// A `for` loop runs a block of code a specified number of times.
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`); // Outputs: Iteration 0, Iteration 1, ..., Iteration 4
}

// ❌ ERROR: 'i' is not accessible here because it was declared with 'let' (block-scoped).
// console.log(i);

// ----------------------------------------------------------------------------
// 2️⃣ WHILE LOOP
// ----------------------------------------------------------------------------

// A `while` loop runs while a condition remains true.
let counter = 5;
while (counter > 0) {
    console.log(`Counting down: ${counter}`);
    counter--;
}

// ----------------------------------------------------------------------------
// 3️⃣ DO-WHILE LOOP
// ----------------------------------------------------------------------------

// A `do-while` loop guarantees at least **one execution** before checking the condition.
let attempts = 0;
do {
    console.log(`Attempt: ${attempts}`);
    attempts++;
} while (attempts < 3); // Runs at least once, even if attempts were already >= 3.

// ----------------------------------------------------------------------------
// 4️⃣ FOR...OF LOOP (Best for Arrays & Iterables)
// ----------------------------------------------------------------------------

// A `for...of` loop iterates over **iterable objects** like arrays, strings, or Maps.
const fruits: string[] = ['Apple', 'Banana', 'Cherry'];
for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// ❌ ERROR: `for...of` only works on iterables, not objects.
// let obj = { a: 1, b: 2 };
// for (const key of obj) { console.log(key); }  // ERROR

// ----------------------------------------------------------------------------
// 5️⃣ FOR...IN LOOP (Best for Object Keys)
// ----------------------------------------------------------------------------

// A `for...in` loop iterates over **object keys**.
const user = { name: 'Jacob', age: 30, role: 'admin' };
for (const key in user) {
    console.log(`${key}: ${user[key as keyof typeof user]}`); 
    // Need `keyof typeof user` to avoid TypeScript errors.
}

// ----------------------------------------------------------------------------
// 6️⃣ ARRAY METHODS AS LOOP ALTERNATIVES
// ----------------------------------------------------------------------------

// TypeScript supports higher-order array methods like `.forEach()`, `.map()`, `.filter()`, and `.reduce()`.

// ✅ forEach() (Executes a function for each array element)
fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});

// ✅ map() (Creates a new array with modified elements)
const fruitLengths = fruits.map(fruit => fruit.length);
console.log(fruitLengths); // Output: [5, 6, 6]

// ✅ filter() (Returns an array of elements that pass the condition)
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // Output: ['Banana', 'Cherry']

// ✅ reduce() (Accumulates array values into a single result)
const totalCharacters = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(`Total characters in all fruits: ${totalCharacters}`);

// ----------------------------------------------------------------------------
// LOOPING THROUGH MAPS AND SETS
// ----------------------------------------------------------------------------

// ✅ Using `for...of` to iterate over a Map (key-value pairs)
const userRoles = new Map([
    ['Jacob', 'admin'],
    ['Alice', 'editor'],
    ['Bob', 'user'],
]);

for (const [name, role] of userRoles) {
    console.log(`${name} is a ${role}`);
}

// ✅ Using `for...of` to iterate over a Set (unique values)
const uniqueNumbers = new Set([1, 2, 3, 4, 4, 5]); // Duplicates are ignored
for (const num of uniqueNumbers) {
    console.log(`Unique number: ${num}`);
}

// ----------------------------------------------------------------------------
// KEY TAKEAWAYS
// ----------------------------------------------------------------------------

// 1️⃣ `for` → Best for precise iteration when index-based control is needed.
// 2️⃣ `while` → Best when looping should continue until a condition is false.
// 3️⃣ `do-while` → Ensures at least one iteration, regardless of condition.
// 4️⃣ `for...of` → Best for iterating over arrays, strings, Maps, and Sets.
// 5️⃣ `for...in` → Best for iterating over object keys.
// 6️⃣ Array methods (`forEach`, `map`, `filter`, `reduce`) often replace traditional loops for cleaner code.

// TypeScript enforces **type safety** in loops, preventing issues like iterating over non-iterable values.

