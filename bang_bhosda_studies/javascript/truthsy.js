// falsy values in JavaScript
// false
// 0
// -0
// ""
// null
// undefined
// NaN
//0n

// truthy values in JavaScript
// true
// any non-zero number
// any non-empty string
// any object
// any array

//nullish coalescing operator (??) in JavaScript

let val1;
val1 = 5 ?? 10; // This will return 5 because val1 is not null or undefined
console.log(val1);

val2 = null ?? 10; // This will return 10 because val2 is null
console.log(val2);

let val3;
val3 = undefined ?? 10; // This will return 10 because val3 is undefined
console.log(val3);

//ternary operator in JavaScript

// condition ? expressionIfTrue : expressionIfFalse

let age = 18;
let canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote);