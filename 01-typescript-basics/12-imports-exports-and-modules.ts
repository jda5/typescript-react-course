// ----------------------------------------------------------------------------
// MODULES, IMPORTS, AND EXPORTS IN TYPESCRIPT
// ----------------------------------------------------------------------------

// In TypeScript (and JavaScript), we use **modules** to organize code across multiple files.
// Modules allow us to **import and export** functions, variables, and classes between files.

// ----------------------------------------------------------------------------
// 1️⃣ EXPORTING CODE
// ----------------------------------------------------------------------------

// ✅ Named Export (Allows multiple exports from a file)
export function greet(name: string): string {
	return `Hello, ${name}!`;
}

export const PI = 3.14159;

export class Person {
	constructor(public name: string, private weight: number) {}
}

// ✅ Default Export (Only one per file)
export default function sayGoodbye(name: string) {
	return `Goodbye, ${name}!`;
}

// ----------------------------------------------------------------------------
// 2️⃣ IMPORTING CODE
// ----------------------------------------------------------------------------

// ✅ Importing Named Exports
import { greet, PI, Person } from "./utils";

console.log(greet("Alice")); // "Hello, Alice!"
console.log(PI); // 3.14159
const user = new Person("Bob", 150);
console.log(user.name); // "Bob"

// ✅ Importing a Default Export
import sayGoodbye from "./utils";
console.log(sayGoodbye("Charlie")); // "Goodbye, Charlie!"

// ✅ Importing Everything (Wildcard `*`)
import * as Utils from "./utils";
console.log(Utils.greet("David")); // "Hello, David!"
console.log(Utils.PI); // 3.14159
const person = new Utils.Person("Eve");
console.log(person.name); // "Eve"

// ----------------------------------------------------------------------------
// 3️⃣ WHEN TO USE DEFAULT VS. NAMED EXPORTS?
// ----------------------------------------------------------------------------

// ✅ Use Default Export (`export default`)
// - When the module **exports only one main function or class**.
// - Allows the function to be imported with any name.

// ✅ Use Named Exports (`export {}`)
// - When the module **exports multiple values**.
// - Helps with **auto-completion** and **tree-shaking** (removing unused code).

// ----------------------------------------------------------------------------
// 4️⃣ FILE STRUCTURE AND MODULARIZATION BEST PRACTICES
// ----------------------------------------------------------------------------

// ✅ Organizing Code into Modules:
// 📁 project-folder/
// ├── 📁 components/
// │   ├── Button.ts
// │   ├── Header.ts
// │   ├── Footer.ts
// ├── 📁 utils/
// │   ├── helpers.ts
// │   ├── constants.ts
// ├── main.ts

// ✅ Example: components/Button.ts
export function Button() {
	return `<button>Click me</button>`;
}

// ✅ Example: main.ts
import { Button } from "./components/Button";
console.log(Button()); // "<button>Click me</button>"

// ----------------------------------------------------------------------------
// 5️⃣ RESOLVING IMPORT ERRORS
// ----------------------------------------------------------------------------

// ❌ Error: Cannot find module './utils'
// ✅ Fix: Ensure `tsconfig.json` has correct `moduleResolution` and `baseUrl`.

// In `tsconfig.json`:
// {
//   "compilerOptions": {
//     "module": "ES6",
//     "moduleResolution": "node",
//     "baseUrl": "./src"
//   }
// }

// ❌ Error: "Cannot use import statement outside a module"
// ✅ Fix: Ensure package.json has `"type": "module"` (for ESM modules).

// ----------------------------------------------------------------------------
// 🚀 SUMMARY
// ----------------------------------------------------------------------------
// - Use **named exports** (`export {}`) for multiple exports.
// - Use **default exports** (`export default`) for single primary exports.
// - Import using `{}` for named exports, or no `{}` for default exports.
// - Organize files into **separate modules** for better maintainability.
// - Fix import issues by adjusting **tsconfig.json** and **package.json** settings.
