
const mysym = Symbol("my symbol"); // creating a symbol

const JsUSer = {
    name : "aman",
    "full name" : "aman kumar",
    [mysym]: "my symbol value", // using symbol as key
    age : 22,
    isAdmin : true,
    email : "hunter@gmail.com"
}
console.log(JsUSer); // one line print the whole object

// to access full name we have to use bracket notation because of space in key
console.log(JsUSer["full name"]); 


// to access name we can use dot notation
console.log(JsUSer.name); 

// to access symbol key we have to use bracket notation
console.log(JsUSer[mysym]);

console.log(typeof JsUSer[mysym]);

//overwiting value
JsUSer.email = "amankumar@gmail.com";

// to freeze the object so that we cannot change any value
// Object.freeze(JsUSer);

// this will not work because object is frozen
JsUSer.age = 23;

console.log(JsUSer);
 

JsUSer.greeting = function() {
    console.log("Hello, I am " + this.name);
};

console.log(JsUSer.greeting()); // calling the method

JsUSer.greetingtwo = function() {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
};

console.log(JsUSer.greetingtwo()); // calling the method


//singalton

 const regularUser = {
    email : "hero@gmail.com",
    userfullname :{
        firstname : "hero",
        lastname : "singh"
    } 
 }
  
// to access nested object
console.log(regularUser.userfullname.firstname); // dot notation

// merging two objects
const obj1 = {
    a : 1,
    b : 2
}
 const obj2 = {
    c : 3,
    d : 4
}
// using spread operator
const mergedObj = {...obj1, ...obj2};
console.log(mergedObj);

// using Object.assign()
const mergedObj2 = Object.assign({}, obj1, obj2);
console.log(mergedObj2);

//target in Object.assign() is the first parameter which is an empty object here, and then we are passing obj1 and obj2 which will be merged into the target object.

const users = [
    {
        id : 1,
        name: "aman",
    },
    {
        id : 2,
        name: "hero",
    },
    {
        id : 3,
        name : "villain",
    }
]

users[1].name = "hero updated"; // updating name of user with id 2

console.log(users); // printing the updated users array

console.log(JsUSer);

console.log(Object.keys(JsUSer)); // to get all keys of the object

console.log(Object.values(JsUSer)); // to get all values of the object

console.log(Object.entries(JsUSer)); // to get all key-value pairs of the object in an array format

console.log(JsUSer.hasOwnProperty("name")); // to check if the object has a specific key

