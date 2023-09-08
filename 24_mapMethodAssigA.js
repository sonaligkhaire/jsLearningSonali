


const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
//transform array
console.log(`-----------given array is ---------`);
console.log(arrayNumbers);
console.log(`--------Add 10 into each index------------------`);
const addArryValue = arrayNumbers.map((element) =>{
       return element+10;
});
console.log(addArryValue);

console.log(`-----------------------print array of cube------------------------------------------`);
const arrayOfCube = arrayNumbers.map((currentvalue) =>{
     return currentvalue * currentvalue * currentvalue
});
console.log(arrayOfCube);

console.log(`----------------add index value into its corresponding each array element & log it----------------`);
 const arrayIndex = arrayNumbers.map((currentvalue,index) => {
    return currentvalue+index;
});
console.log(arrayIndex);   //after adding index and current value