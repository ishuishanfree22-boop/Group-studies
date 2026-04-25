//for of loop
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}// for of loop is used to itrate over iterable

// maps

const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

console.log(map);  // key value pair

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

const myobject ={
    game:'cricket',
    game2:'football',
    game3:'hockey'
}

// for (const [key, value] of myobject) {
//   console.log(`${key}: ${value}`);
// }
//give error because object is not iterable but we can use for in loop to iterate over object

//for in loop is used to iterate over objects

for (const key in myobject) {
  console.log(`${key}: ${myobject[key]}`);
}

const num = [1, 2, 3, 4, 5];

for (const index in num) {
  console.log(`${index}`);
}// for in loop is used to iterate over the index of the array

//for in looop cant work with map because map is not an object but we can use for of loop to iterate over map

//for each loop is used to iterate over arrays

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num);
}); // name is not used because it is a callback function


numbers.forEach(function(num) {
    console.log(num)
}); // for each loop is used to iterate over arrays and it takes a callback function as an argument and it is not used to iterate over objects and maps

function printme(num){
    console.log(num);
}

numbers.forEach(printme); // we can also pass a function as an argument to for each loop and it will call the function for each element in the array

numbers.forEach((num, index , array) => {
    console.log(`index: ${index}, value: ${num}, array: ${array}`);
}); // we can also get the index of the element in the array by passing a second argument to the callback function in for each loop

const smallcaps= [
    {
        small : 'a', 
        cap : 'A'
    },
    {small : 'b', cap : 'B'},
    {small : 'c', cap : 'C'},
    {small : 'd', cap : 'D'},
    {small : 'e', cap : 'E'},
]

smallcaps.forEach((obj) => {
    console.log(obj.small, obj.cap);
}); // we can also iterate over an array of objects using for each loop and it will return each object in the array

const value = numbers.forEach((num) => {
    console.log(num);
    return num;
}); // for each loop does not return anything it is used to iterate over arrays and it takes a callback function as an argument and it is not used to iterate over objects and maps

console.log(value); // undefined because for each loop does not return anything

//filter method in JavaScript
const mynms = [1, 2, 3, 4, 5];

const evenNumbers = mynms.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
// filter method return  new array

//map method in JavaScript
const mynums = [1, 2, 3, 4, 5];
const doubledNumbers = mynums.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// map method return  new array

//using map method to iterate over an array of objects

const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
];

const userNames = users.map((user) => user.name);
console.log(userNames); // ['John', 'Jane', 'Bob']  

//using maps and filter together

const numberss = [1, 2, 3, 4, 5, 6];
const evenDoubledNumbers = numberss.map((num) => num * 2).filter((num) => num % 3 === 0);
console.log(evenDoubledNumbers); // [6, 12] because 6 and 12 are the only numbers that are even and divisible by 3 in the array of doubled numbers

//reduce method in JavaScript
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue; }, 0);
console.log(sum); // 15 because it adds all the numbers in the array and returns the sum