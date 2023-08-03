



console.log(`---------------------total no of array-----------------------------`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
let arrayLength = arrayNumbers.length;
console.log(`Array of length is: ${arrayLength}`);

console.log(`-----------first element and last element---------------------`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
let a1 = arrayNumbers[0];
let a2 = arrayNumbers[arrayNumbers.length-1];
console.log(`The first element of array is : ${a1}`);
console.log(`The last number of array is : ${a2}`);

console.log(`-----------print third last element using length property-------------`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
let arrayLength1 = arrayNumbers.length;
let thirdLastElement = arrayNumbers[arrayLength1-3];
console.log(`Third Last element is : ${thirdLastElement}`);


console.log(`----------print all even number using for loop-----------------`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11]; //initializing arrayNumbers array
console.log(arrayNumbers);

let even = [];  //declaring empty even array
for (let index =0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 == 0) {
       //even.push(arrayNumbers[index]);
       //console.log(`Even numbers in array is : ${even}`); //OR//
       let even = arrayNumbers[index];
       console.log(`Even numbers in array is : ${even}`);
       
    }  
    
}

console.log(`----------print odd no using for loop-----------------`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);

let odd = [];  //declaring empty even array
for (let index =0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 !== 0) {
       //even.push(arrayNumbers[index]);
       //console.log(`Even numbers in array is : ${even}`); //OR//
       let odd = arrayNumbers[index];
       console.log(`Odd numbers in array is : ${odd}`);
       
    }  
    
}

console.log(`----------- print all even positioned element from arrayNumber & sum it -------`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index+=2) {
    sum+=arrayNumbers[index];
    
}
console.log(`Sum of all the even numbers : ${sum}`);

//OR//

//  let sum1 = 0;
//  let evenPositionedNum = [];
//  for (let x = 0; x < arrayNumbers.length; x++) {
//     if (x % 2 == 0) {
//         evenPositionedNum = evenPositionedNum.concat(arrayNumbers[x]);
//         sum1 += arrayNumbers[x];
//     } 
//  }
//  console.log(
//     `All even positioned numbers in given array [${arrayNumbers}]: `,
//     evenPositionedNum
//  );
//  console.log("Sum of even positioned numbers in given array : ", sum1);


console.log(`----------- print all odd positioned element from arrayNumber & sum it -------`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
var sum = 0;
for (let index = 1; index < arrayNumbers.length; index+=2) {
    sum+=arrayNumbers[index];
    
}
console.log(`Sum of all the odd numbers : ${sum}`);

console.log(`--------------print Sum of all elements from arrayNumbers------------`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    sum+= arrayNumbers[index];
    
}
console.log(`Sum of all elements from arrayNumbers : ${sum}`);

console.log(`-----------------------print multiple of 5 numbers----------------------`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i]%5 === 0) {
       console.log(`This numbers are multiple 5 : ${arrayNumbers[i]}`); 
    }
}

console.log(`-----------find the available numbers of this array----------------`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
var isAvailable = arrayNumbers.includes(115);
console.log(`This number 115 is include this array: ${isAvailable}`);


console.log(`-----------find the available numbers of this array------------`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
var isAvailable = arrayNumbers.includes(23);
console.log(`This number 23 is include this array: ${isAvailable}`);


console.log(`----Insert no 55,66 before index 3-----------------------`);
console.log(`Insert a number:`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);


console.log(`-----Delete 3 element starting from index 4----------------------`);
console.log(`Delete 3 Numbers :`);
var arrayNumbers=  [20,31,40,25,23,11,29,9,60,2,11];
arrayNumbers.splice(0,3);
console.log(arrayNumbers);