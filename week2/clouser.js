// Clouser

const createCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
};

const counter = createCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2

//------------------------------

// Clouser Memory Behavior

// Problem:

function createLeak() {
  // 1. Allocate a large object (e.g., 10MB)
  const massiveData = new Array(1000000).fill('some sensitive data');

  // 2. Return a closure that references this data
  return function () {
    console.log('Accessing first element: ' + massiveData[0]);
  };
}

// 3. 'massiveData' is now trapped in memory as long as 'myLeak' exists
const myLeak = createLeak();
myLeak();

/**
 * JavaScript allocates a big chunk of memory (≈10MB).
 * massiveData lives inside the function’s execution context.
 * [Closures keep variables they use alive] -rule
 */

// Fix:

function createFixed() {
  const massiveData = new Array(1000000).fill('some sensitive data');

  // FIX: Only capture the specific value needed, not the whole array
  const firstElement = massiveData[0];

  return function () {
    console.log('Accessing first element (Fixed): ' + firstElement);
  };
}

const myFixed = createFixed();
myFixed(); // 'massiveData' is now eligible for garbage collection
