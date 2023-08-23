

const arrayNumbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
console.log(`Complete Array :[${arrayNumbers}] `);

arrayNumbers.forEach((currentValue, index)=> {
    console.log(`Array Element is : ${currentValue} , Array Index is :${index}`);
});

console.log(`-----------------Print Positive Numbers----------------------------`);
arrayNumbers.forEach((arrPositive) => {
    if (arrPositive > 0) {
        console.log(`Positive Number : ${arrPositive}`);
    }
});

console.log(`-----------------Print Negative Numbers------------------------`);
const arr = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
console.log(`New Array : [${arr}] `);
arr.forEach((arrNegative) => {
    if (arrNegative < 0 ) {
        console.log(`Negative Number : ${arrNegative}`);
    }
});

console.log(`--------------------------Print Even Number------------------------------------`);
arrayNumbers.forEach((arrEven) => {
    if (arrEven % 2 == 0 ) {
        console.log(`Even Number : ${arrEven}`);
    }
});

console.log(`---------------------Sum of all elements in array--------------------`);
//const arrayNumbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];   //hide bcoz its already declared and its constant value it cannot Declare again(not repeated)
    let sum = 0;      //creating variable to store the sum
    arrayNumbers.forEach(arrSum => {                  //calculation the sum using forEach 
        sum += arrSum;
    });
    console.log(`Sum of all elements is : ${sum}`);




 console.log(`------------------Print Even indexed array value using forEach() with arrow function---------------`);
 arrayNumbers.forEach( (evenArrIndex, index)=> {
    if (index%2== 0) {
        console.log(` Even arry is : ${evenArrIndex}, index is : ${index}`);
    } 
 });
