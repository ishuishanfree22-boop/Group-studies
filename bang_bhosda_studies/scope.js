{} // --> scope

// Scope is the context in which variables and functions are accessible. In JavaScript, there are three types of scope: global scope, function scope, and block scope.

var globalVariable = "I am a global variable"; // This variable is in the global scope

let blockVariable = "I am a block variable"; // This variable is in the block scope

const functionVariable = "I am a function variable"; // This variable is in the function scope

const myFunction = () => {
    console.log(functionVariable); // This will work because functionVariable is in the function scope
    
    console.log(globalVariable); // This will work because globalVariable is in the global scope
    // console.log(blockVariable); // This will not work because blockVariable is in the block scope
}

for (let i = 0; i < 5; i++) {
    console.log(i); // This will work because i is in the block scope of the for loop
}

function one(){
    let a = 10; // This variable is in the function scope of one
    console.log(a);
    function two(){ // This will work because two is in the global scope
        console.log(a); // This will work because a is in the function scope of one and two is nested inside one
    }
    console.log(`for function 1 ${a}`);
    two();
}
one();
// console.log(a); // This will not work because a is in the function scope of one and is not accessible outside of it

// DEFINNG FUNCTIONS IN JAVASCRIPT

function addone(num){
    return num + 1;
}
console.log(addone(5)); // This will print 6 function as declaration

const addtwo = function(num){
    return num + 2;
}
console.log(addtwo(5)); // This will print 7  function as expression

const addthree = (num) => {
    return num + 3;
}
console.log(addthree(5)); // This will print 8 //function as arrow function

//----------------------------------------------------------------------

// this and arro function

// this cant be used in function expression and function declaration but can be used in arrow function

const chai = () => {
    console.log(this); // this will refer to the global object (window in browsers) in arrow function
}
chai();

//implicit return in arrow function

const addfour = num => num + 4;
console.log(addfour(5)); // This will print 9

//while using curly braces ==> return {}
// while not using curly braces ==> implicit return ()

