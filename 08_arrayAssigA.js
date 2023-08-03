

var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`------------------1st and Last Element-----------------`);
let a1 = arrayFruits[0];
let a2 = arrayFruits[arrayFruits.length-1];
console.log(`The 1st element is: ${a1} and Last element is: ${a2}`);

console.log(`-------------------Add element---------------------------`);
var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arrayFruits.unshift("Papaya");
console.log(`Add element before the element of "Banana" is  :-  ${arrayFruits}`);

console.log(`----------remove the element-----------------`);
var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);
console.log(arrayFruits.slice(0,3,3));
//console.log(`After removing "Mango" , The array is  : ${removeEle}`);

console.log(`-------insert "pineapple at last position-------------`);
var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);
arrayFruits.push("Pineapple");
console.log(arrayFruits);

console.log(`--------insert "Dragon Fruit" Before "Water Melon"-------------------------`);
var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(arrayFruits);

console.log(`-------------replace element "Orange" with "kiwi"--------------------------`);
var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);
arrayFruits.splice(1,1,"Kiwi");
console.log(arrayFruits);

console.log(`-----------print Starting from index 1 to 4-----------------------------`);
var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);
for (let index = 1; index <=4; index++) {
    const element = arrayFruits[index];
    console.log(element);
}

console.log(`-----------------print last 3 elements--------------------`);
var arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arrayFruits);
console.log(arrayFruits.slice(2));

