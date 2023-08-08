//Object, Array Freeze and Merge......



console.log(`-----------------Merge the two object and print(log on console) it`);
let personalDetails = {
    firstName: "Sonali",
    lastName :"Khaire",
    age: 27,
    mob : "75 6949 5015"

}


let collegeDetails = {
    collegeName: "S.J.R.S College",
    city : "pune",
    pinCode :410501
}
console.log(`My Data Is:`);
let mergedObject = Object.assign({}, personalDetails , collegeDetails);
console.table(mergedObject);


console.log(`----------------------- Array Using For Loop & log on console -------------------------------`);

const myArray = ["arya bhandare" , "shilpa sonkamble" , "pooja bobde" , "sarika patil" , "kamal gawade" ];
Object.freeze(myArray);
console.log(`------------Traversing Array Using for of loop----------------------------`);
for (const element of myArray) {
    console.log(`My friend name is :` ,element);
}

 console.log(`-------------------------------- word reverse order----------------------------------`);

 let stringWord = "Technology";

//  let reverseWord = stringWord.split("").map(word => word.split("Technology").reverse().join(""));
//  console.log(reverseWord);

 let reverseStr = "";
 for (let index = stringWord.length-1; index >= 0; index--) {
    const reverseStr = stringWord[index];
    console.log(reverseStr);
 }
