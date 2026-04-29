//learning about promises in js

const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Promise is being resolved...");
        resolve()
    }, 2000);
});
// creating a promise that resolves after 2 seconds

promise.then(function(){
    console.log("Promise resolved successfully!");
})

//resolve conneced t othen and reject connected to catch

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async 2 seconds work is done");
        resolve();
    }, 5000); 
}).then(function(){
    console.log("asyc 2 resolved");
})
//then is used to handle the resolved state of the promise, and catch is used to handle the rejected state of the promise.

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({'user': 'aman', 'age': 22});
    }, 1000);
})
promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({'username': 'aman', 'age': 22});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
})
    // simulating an error condition
// const username = promise4.then((user) => {
//     console.log(user);
//     return user.age;
// })

// console.log(username); // this will log a pending promise because the promise is not yet resolved

promise4.then((user) => {
    console.log(user);
    return user.age;
})
.then((age) => {
    console.log(age);
})
.catch((error) => {
    console.log(error);
}).finally(() => console.log("Promise is either resolved or rejected, but finally block is executed regardless of the outcome."))

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({'username' : 'javascript', password: '12345'});
        } else {
            reject ('Error: js went wrong');
        }
    }, 1000);
});

async function consumePromise5(){
    try {
        const response = await promise5;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromise5(); // dont forgrt to call the function to execute the async code

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); // fetching data from an api using fetch method which returns a promise

//         const data = await response.json(); // parsing the response to json format also need time to parse the response
//         console.log(data);
//     } 
//     catch(error) {
//         console.log(error);
//     }
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // parsing the response to json format
    .then(data => console.log(data)) // logging the data to the console
    .catch(error => console.log(error)); // handling any errors that may occur during the fetch operation

    //chaining multiple then methods to handle the resolved state of the promise and catch method to handle the rejected state of the promise.