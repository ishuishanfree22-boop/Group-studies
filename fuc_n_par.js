function word(){
    console.log("w");
    console.log("o");
    console.log("r");
    console.log("d");
}
//word();

function addtwonum(no1 , no2){
    // console.log(no1 + no2);
      let result = no1 + no2;
      return result;
}
const result = addtwonum(23, 43)

console.log(result);
console.log("HELLO")

function login(username){
    if (username === undefined){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`

}
//console.log(login("aman"))
console.log(login())

function calculateprice(val1, val2, ...num1){ //rest operator
    return [num1 , val1, val2]
} 

console.log(calculateprice(132,123,123,123,132354,345,3546))


//handle object in function

const user = {
    username: "aman",
    price: 344
}

function handelobject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}

handelobject(user) // pass by reference

handelobject({
    username : "chimbory",
    price : 69
})
 


