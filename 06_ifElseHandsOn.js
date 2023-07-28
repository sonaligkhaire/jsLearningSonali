
console.log(`=================================Assignment No 1=========================================================`);
console.log(`----------------------------------Step 1:---------------------------------------------------------`);
function checkNumber( num){
    var numValue = +num;
if (isNaN(numValue) || num<0) {
    console.log(`${num} is invalid`); 
} else {
    // if block to handle all valid scenarios
    if (num%2==0) {
        console.log(`${num} is Even`);
    } else {
        console.log(`${num} is Odd`);
    }
}
}
checkNumber(45);
checkNumber(70);
checkNumber(67);
checkNumber(98);


console.log('-----------------------------------Step 2:-----------------------------------------------');

function checkString(stringValue){
    var stringlen = stringValue.length;

    if(stringlen>=10) {
        console.log(`${stringValue} is contain more than 10 characters`);
    } else {
        console.log(`${stringValue} is not contain more than 10 characters `);
    }
}
checkString("JavaScript-E56");

console.log(`-----------------------------------------Step 3---------------------------------------------------`);


function lang(string){
    if(string.startsWith("Java")) {
        console.log(`${string}, this string is start with "Java".`);
    } else {
        console.log(`${string}, this string is not start with "Java".`);
    }
}
lang("JavaScript Language");