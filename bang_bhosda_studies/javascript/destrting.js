const course ={
    coursesname: "JavaScript",
    courseprice: 1000,
    courseinstructor: "John Doe"
}

//destructuring
const {courseinstructor: instructor} = course;
console.log(instructor); // John Doe