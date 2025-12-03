## JS Has 6 Types of scopes

### 1- Global Scope

- Variables declared outside any function or block have global scope. This means they are accessible anywhere in the JavaScript code. 
- global variables become properties of the window object.

**Important Consideration:**

Using too many global variables can pollute the global namespace & increasing bugs.

### 2- Local Scope
- Variables declared inside a function are in local scope.
- They can only be accessed from within that function.
- Once the function finishes executing, the variable is removed from memory, and it cannot be accessed anymore.

**Important Consideration:**

Local Scope Helps variable name conflict, promoting encapsulation, and data privacy withing function.

### 3- Block Scope
- variables declared with let and const are block-scoped.
- A block is any code between {} (curly braces)
- Block-scoped variables are limited to the block in which they are defined.

**Important Consideration:**

Unlike var, let and const prevent accidental variable leakage outside their intended block

### 4- Function Scope
- Every function in JavaScript creates its own scope, known as function scope.
- JavaScript also supports closures, which allow inner functions to access the outer function’s variables even after the outer function has finished executing.

**Important Consideration:**

Closures enable features like data encapsulation and function factories.

### 5- Scope Chain
- JavaScript will look up the scope chain, checking outer scopes until it either finds the variable or reaches the global scope.