


//1. Object Destructing
let student = {  //let object
    rollNo:2233,
    state: "MH",   //property: " "
    city: "Pune",
    college: "COEP Pune"
}
// let state = student.state; //let variable =
// let college = state.college;
// let city = student.city;
// console.log(state,college);
//or//
let {state , college , city,pin=431175} =  student;  //object destructuring with default value.
console.log(state,college,city,pin);


//2. Array Destructuring

// let array = [4,5,6]; //remove middle 2 element we used splice(2,2) method
// let [num1,num2,num3,num4] = array;
// console.log(num1,num2,num3, num4);  //answer 4 5 6 undefined(0) 

//0r//

let array = [4,5,6, 77,88,99]; // array destructuring with default value
let [num1,num2,num3,num4=0] = array;
console.log(num1,num2,num3,num4);
