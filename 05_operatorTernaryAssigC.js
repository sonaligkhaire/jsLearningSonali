

console.log(`========================================Assignment no 2==================================================`);
console.log(`---------------------------------------------Step 1:-------------------------------------------`);

function maleMarriageEligibility(gender, age, boyName){ 

var result =  (gender === "Male") && (age>= 21 ) ? `Hey , "${boyName}", you are eligible for Marriage.` : 
`Hey "${boyName}", you are not eligible for Marriage.`;

console.log(result);

}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");


console.log(`-----------------------------------------Step 2:------------------------------------------------`);

function femaleMarriageEligibility(gender, age, girlName){
    
    
    var res = gender && age>= 18 ? console.log(`Hey ${girlName}, you are age is ${age} so you are eligible for Marriage.`) :
    console.log(`Hey ${girlName}, your age is ${age} so you are not eligible for Marriage.`);

}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");