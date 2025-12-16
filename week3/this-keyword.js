// this keyword in JavaScript "possible cases"
// Golden rule: this refers LHS of the dot.

// Case 1: Global Context
console.log(this); // In a browser, this refers to the global window object

// Case 2: Function Context
function showThis() {
    console.log(this); // In non-strict mode, this refers to the global object (window in browsers)
}
showThis();

// Case 3: arrow Function Context
const arrowFunc = () => {
    console.log(this); // In arrow functions, this refers to the enclosing lexical context
};
arrowFunc();

// Case 4: Method Context (method inside an object)
const obj = {
    name: 'JavaScript',
    showThis: function() {
        console.log(this); // Here, this refers to the obj object
    }
};
obj.showThis();

// Case 5: arrow Function as a Method
const obj2 = {
    name: 'JavaScript',
    showThis: () => {
        console.log(this); // Here, this refers to the enclosing lexical context (global object in this case)
    },
    thisValue: this // capturing the global this
};
obj2.showThis();

// Case 6: this inside a Class
class MyClass {
    showThis() {
        console.log(this); // Here, this refers to the instance of MyClass
    }
}
const myInstance = new MyClass();
myInstance.showThis();

// Case 7: this indside callback function
class AnotherClass {
    constructor() {
        this.name = 'AnotherClassInstance';
    }

    showThis() {
        setTimeout(function() {
            console.log(this); // Here, this refers to the global object (window in browsers)
        }, 1000);
    }
}
const anotherInstance = new AnotherClass();
anotherInstance.showThis();

// Case 8: this inside callback arrow function
class YetAnotherClass {
    constructor() {
        this.name = 'YetAnotherClassInstance';
    }

    showThis() {
        setTimeout(() => {
            console.log(this); // Here, this refers to the instance of YetAnotherClass
        }, 1000);
    }
}
const yetAnotherInstance = new YetAnotherClass();
yetAnotherInstance.showThis();

// Case 9: Constructor Function Context
function Person(name) {
    this.name = name;
    console.log(this); // Here, this refers to the newly created object
}
const person1 = new Person('Alice');

// -----------------------------------------------------//

// Case 10: Explicit Binding with call/apply/bind
function greet() {
    console.log(this.name);
}
const person2 = { name: 'Bob' };
greet.call(person2); // Here, this refers to person2 object
greet.apply(person2); // Here, this refers to person2 object
const boundGreet = greet.bind(person2);
boundGreet(); // Here, this refers to person2 object


// Case 11: Event Listener Context (in browser)
// Assuming there's a button with id 'myButton' in the HTML
// document.getElementById('myButton').addEventListener('click', function() {
//     console.log(this); // Here, this refers to the button element
// });

// ----> The browser does something special internally:

// yourCallback.call(theElementThatWasClicked);  
// It explicitly sets 'this' to the target element



