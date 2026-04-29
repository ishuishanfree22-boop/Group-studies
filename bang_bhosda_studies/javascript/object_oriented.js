const user = {
    username: 'aman',
    loginCount: 5,
    signedIn: true,

    getUserInfo: function() {
        //console.log("got user data from database");
        console.log(`Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`);
        // return 0; // if you want to return something from the function, you can use return statement. otherwise, it will return undefined by default.
    }
}
// console.log(user.username);
// console.log(user.getUserInfo());

// const promise = new Promise() //constroctor function to createa new promise object.

// const date = new Date(); // constructor function to create a new date object.

//creating function

function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    // implicitly return this; // if we dont return anything from the constructor function, it will return the object created by the constructor function by default. but it is a good practice to return this explicitly to avoid any confusion.

    return this; // return this is used to return the object created by the constructor function.
}

// const user1 = User('aman', 5, true);
// const user2 = User('john', 10, false);
// console.log(user1); // this will log the user1 object with the properties username, loginCount and signedIn.but shows user2 data because we are not using new keyword to create a new object. so, it is overwriting the user1 data with user2 data. to fix this issue, we need to use new keyword to create a new object.

// // to fix this issue, we need to use new keyword to create a new object.

const user1 = new User('aman', 5, true);
const user2 = new User('john', 10, false);


console.log(user1); // this will log the user1 object with the properties username, loginCount and signedIn.

console.log(user2); // this will log the user2 object with the properties username, loginCount and signedIn. 

console.log(user1.constructor); // this will log the constructor function of the user1 object which is User function.