

//fun expression with no arg no return Value.
let add = function(){
    console.log(10+10);
}
add();

let arrowFun = ()=>{  //arrow function with return value
    return 13 +13;
 }
 let value = arrowFun();
 console.log(value);
 
 
 let multiply = (num1, num2) => {          //function with 2 args 
     console.log(num1*num2);
 }
 multiply(5, 5);                         // pass 2 value