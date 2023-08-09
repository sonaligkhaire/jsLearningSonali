
//Factorial Using for loop.....

console.log(`----------------Factorial No Using For Loop..--------------------------`);
function Factorial (num){
    if (num == 0 || num == 1) 
        return 1;

        for (var index = num - 1; index >= 1; index--) {
         num *= index;
        
    }
    return num;
} 
console.log(`Factorial of 5 is : ${Factorial(5)}`);
console.log(`Factorial of 9 is : ${Factorial(9)}`);
console.log(`Factorial of 11 is : ${Factorial(11)}`);
console.log(`Factorial of 7 is : ${Factorial(7)}`);
