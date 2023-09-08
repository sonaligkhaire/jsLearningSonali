



const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`------------------Given array is:---------------------`);
console.log(arrayNumbers);

console.log(`------------------print all no which are greater than 50------------------------`);
  const arrayGreter = arrayNumbers.filter((Number) => {
   return Number >50;
});
console.log(arrayGreter);

console.log(`-----------------print even numbers------------------`);
 const evenNumbers = arrayNumbers.filter(function(element) {
    return element % 2 == 0 ;
 });
 console.log(`Even numbers in an array is : ${evenNumbers}`);

 console.log(`------------------print odd numbers--------------`);
 const oddNumbers = arrayNumbers.filter((num) => 
           num % 2!== 0
 );
 console.log(`Odd numbers in an array is : ${oddNumbers}`);



 console.log(`------------Array element which are multiple of 5----------------`);
 const arrayMultiple = arrayNumbers.filter((num) => {
    return num % 5 == 0;
 })
 console.log(arrayMultiple);



 console.log(`---------------Array of element which are between 20 and 50-----------------------`);
 const arraybetweenNum = arrayNumbers.filter(function (num) {
  return num >20 && num <50;
 });
  console.log(arraybetweenNum);

 //OR//

//  const arrbetnum = arrayNumbers.filter(function (number) {
//     if (number > 20 && number < 50) {
//         return true;
//     }
//  });
//  console.log(arrbetnum);