## 1. Introduction to React

**React** is a popular JavaScript library for building **user interfaces**. It encourages a **component-based** architecture, where each piece of UI is contained in its own component. This modular approach makes code easier to reason about and reuse.

- **Key Idea**: Break down your application into small, reusable components.
- **Example**: A form, a button, and a list can each be separate components working together.

---

## 2. Setting Up a React Project

To get started quickly, many developers use **Vite** for modern React setups with TypeScript. Vite handles bundling and development configuration out of the box.

1. **Install Node & npm**  
   - Make sure you have Node.js installed. npm (Node Package Manager) comes with Node.
2. **Initialize a Vite Project**  
   ```bash
   npm create vite@latest my-react-app --template react-ts
   cd my-react-app
   npm install
   npm run dev
   ```
3. **Folder Structure**  
   - `src/` → Contains your React components.
   - `main.tsx` → Entry point for your React application.

---

## 3. Thinking in React

React is **declarative**. Instead of telling the browser *how* to update the UI step by step, you describe *what* the UI should look like given some state, and React takes care of the rest.

1. **Break Down the UI**: Identify independent pieces (components).
2. **Plan the Data Flow**: Decide where state lives and how components communicate.

> **Analogy**: Making a sandwich at home (imperative) vs. ordering one at a café (declarative). With React, you “order” changes by declaring how the UI should look, not how to do it step by step.

---

## 4. Creating Components in React

### 4.1 Basic Functional Components

A **React component** is typically a function (or a class) that returns **JSX**. In TypeScript, you might see `function App(): JSX.Element {}` or similar definitions.

```tsx
export default function App() {
  return (
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
```

- **`className` vs. `class`**: In JSX, use `className` because `class` is a reserved keyword in JavaScript.
- **Capital Letter**: Components in React should start with a capital letter (`App`, `Header`, etc.).
  
### 4.2 One Root Element per Component

By default, each component’s `return` must have **one** root element. This is why you cannot directly return two separate elements side by side:

```tsx
// ❌ This causes an error
return (
  <form> ... </form>
  <h1>Todo List</h1>
);
```

**Use a Fragment** (`<> </>`) to wrap multiple elements in an invisible container:

```tsx
// ✅ Using a Fragment
return (
  <>
    <form className="new-item-form"> ... </form>
    <h1 className="header">Todo List</h1>
  </>
);
```

---

## 5. State in React

**State** allows your component to respond to user input and update accordingly. You can **“remember”** values across renders.

```tsx
import { useState } from "react";

export default function App() {
  // `useState` returns an array: [currentValue, functionToUpdateIt]
  const [newItem, setNewItem] = useState("");

  return (
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={event => setNewItem(event.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
```

### 5.1 Understanding `useState`

1. **State Variable** (`newItem`): Holds the current value (a string, in this example).
2. **State Updater Function** (`setNewItem`): Changes the state and triggers a re-render.

> **Important**: React is **immutable** regarding state. Instead of directly modifying state (e.g., pushing to an array), you create a **new** version of the data structure (using the spread operator or other methods).

### 5.2 Event Listeners

```tsx
<button onClick={() => deleteItem(item.id)} className="btn">Remove</button>
```
- `onClick` expects a **function**. Here, we provide **an inline arrow function** that calls `deleteItem(item.id)`.

**Why an arrow function here?**  
- We **pass** a function reference to React, which it will call when the user clicks. If we just wrote `deleteItem(item.id)`, it would run immediately, not on click.

---

## 6. Props (Properties)

**Props** let you pass data from a **parent component** to a **child component**. Think of them as **function arguments** for React components.

```tsx
function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="Alice" />
```

- In TypeScript, we often **type** these props for **better clarity** (`{ name: string }`).

---

## 7. Hooks

**Hooks** are special React functions that let you “hook into” React features (like state, lifecycle methods, etc.):

1. **`useState`** → For state management.
2. **`useEffect`** → For side effects (like fetching data, updating the document title, etc.).
3. **Rules**:
   - **Never call hooks conditionally** (always call them at the **top level** of your component).
   - **Only call hooks inside React components** or custom hooks.

**Typical component structure**:
```ts
export function Component() {
  // 1. Hooks here (useState, useEffect, etc.)

  // 2. Define helper functions if needed

  // 3. Return JSX
  return <div>...</div>;
}
```

---

## 8. React Core Concepts

### 8.1 Single-Page Application (SPA)
A **SPA** uses **one main HTML page** and dynamically updates the view in the browser without needing full page reloads. React manipulates the DOM to create the illusion of multiple pages.

### 8.2 Components
Components are **reusable building blocks** of UI. They can be **nested** within each other. Modern React typically favors **function components** (with hooks) over class components.

### 8.3 JSX
JSX is a syntax extension that lets us **write HTML-like code** directly inside JavaScript/TypeScript. Remember:
- Use **curly braces** (`{}`) to **insert dynamic JavaScript/TS logic**.
- In TS, props or variables can be typed for clarity.

Example:
```tsx
function Profile({ name }: { name: string }) {
  return (
    <div>
      <h1>Hello, my name is {name}</h1>
    </div>
  );
}
```

### 8.4 URL Routing
Using libraries like **React Router**, you can simulate multiple pages in an SPA by **rendering different components** based on the URL.

### 8.5 Component Lifecycle
Three major phases:
1. **Mounting** → Component is first added to the DOM.
2. **Updating** → State or props change, causing a re-render.
3. **Unmounting** → Component is removed from the DOM.

### 8.6 The Virtual DOM
React keeps a **virtual copy** of the real DOM. When state changes:
- React updates this **virtual DOM**.
- It **calculates the minimal set of changes** needed in the real DOM.
- This makes the UI updates **efficient**.

---

## 9. Quick Summary

1. **Setup**: Use tools like **Vite** or **Create React App** for quick project scaffolding.
2. **Components**: Functions that return **JSX**—they should have a single root element.
3. **State**: Managed with **`useState`** hook—changes re-render components.
4. **Props**: Pass data between components—like parameters to a function.
5. **Hooks**: Add functionality (e.g., state, side effects) to **function components**.
6. **Concepts**: SPAs, virtual DOM, lifecycle methods, and optional **routing** for multi-page illusions.

