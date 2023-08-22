


console.log(`-----------Step 1--arrow function with no args and no return value--------------------`);
 let arrFun = () => {
        console.log(`"Good Morning, Today is Tuesday...`);
}
arrFun();

console.log(`----Step 2-- arrow function-Multiplication with 3 args and no return value-------------------`);
let arrMult = (num1, num2 , num3=1) => {                               // 3 args......3rd args value is 1
    console.log(`Multiplication of ${num1}, ${num2} and ${num3} is :`, num1*num2*num3);
}
arrMult(5,5,2);    // 3 values
arrMult(10,4);     //2 values


console.log(`-----Step 3--arrow function-Addition with 5 args and return value---------------------- `);
let arrFunAdd = (num1, num2, num3, num4, num5) => {                           //5 arguments
    let result = num1 + num2 + num3 + num4 + num5;                            //return value
    return  result;                                   
    
}
 let result1 = arrFunAdd(100,100,200,349,756);                    //5 values
 console.log(`Addition of 100, 100, 200, 349, 756  is : ${result1} `);
         
 let result2 = arrFunAdd('I am ','learning ','E56 ','features ','in depth. ' );
 console.log(`Concatination of Given String is : ${result2}` );    
 
