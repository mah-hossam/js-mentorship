// scope chain

let globalVar = "I am a global variable";

// if(true)
//     let globalVar = "I am a global variable";


function outerFunction() {
    let outerVar = "I am an outer variable";

    function innerFunction() {
        let innerVar = "I am an inner variable";
        console.log(globalVar); // Found in the global scope
        console.log(outerVar); // Found in the outer function scope
        console.log(innerVar); // Found in the inner function scope
    }

    function secondInnerFn(){
        // console.log(innerVar); // Error
        console.log(globalVar); // Found in the global scope
        console.log(outerVar); // Found in the outer function scope
    }

    innerFunction();
    secondInnerFn();
}

outerFunction();



// function declaration Vs. arrow function

function declaration(a,b){
    console.log(arguments);
}

declaration(3,3); // [3,3]

let arrow = (a,b) => {
    console.log(arguments);
}

arrow(1,2); // Error, arrow functions does not have it's own scope it's has an access on it's lexical scope (المكان اللي مكتوبه فيه)
// add arrow function to a parent declaration function & re-check the "arguments" again.