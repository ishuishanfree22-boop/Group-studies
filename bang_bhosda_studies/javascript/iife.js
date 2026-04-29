// iife ==> Immediately Invoked Function Expression
(function chai() {
    //named iife
    console.log("IIFE is running...");
})(); // The parentheses at the end invoke the function immediately

//; used to end the statement before the IIFE to avoid any issues with concatenated scripts

// IIFE can also be used to create a private scope for variables and functions

( (name) => {
    console.log(` ${name} ,IIFE with arrow function is running...`);
})("aman"); // The parentheses at the end invoke the function immediately with the argument "aman"