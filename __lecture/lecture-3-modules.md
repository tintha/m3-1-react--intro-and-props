# React Modules

- in Node: `module.exports` and `require` to package
- on the front-end: `import` and `export`

---

### Default exports

```js
// create a Button Component
const Button = (props) => {
  ✂️
}

// make it importable from other files
export default Button;
```

```js
// Import it into the file where you want to use it.
import Button from "../Button";
// This replaces the "require()" syntax used in Node
```

---

### Third-party dependencies

- As in Node, they're specified in `package.json`, and live in `node_modules`.
- They can be imported without any `../`:

```js
import React from "react";

// Equivalent to:
import React from "../../node_modules/react/index.js";
```

---

### CSS imports

In Node, we can only ever `require` two types of files:

- `.js`
- `.json`.

With build systems, we can support _many different_ types of files.

---

```js
import "./App.css";
```

---

# Package.json Scripts

- Run a local development server with `yarn start`
- This spins up an Express server that rebuilds your app on every change. 😮

---

# Fin
