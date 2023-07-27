

function greaterNumber( num1 , num2){
    var num1 = 10;
    var num2 = -10;
    var greater = num1>num2 ? 10 :-10 ;
    console.log(`------------------Step 1:- two args and no return value-----------------------------`);
    console.log(`The greater no between 10 and -10 is:-`, greater);
    //console.log(`The greater no between ${num1} and ${num2} is:- ${greater}`);
    var num1 = 800;
    var num2 = 899;
    var greater = num1>num2 ? 800 : 899 ;
    console.log(`The greater no between 800 and 899 is:-` , greater);

}
greaterNumber();



console.log(`---------------Step 2:- FE with one arg and return value--------------------------------------`);
function isEvenOrOddNum(num){

    var result = num%2==0 ? "true":"false";
    console.log(`The Number is:-`, num);
    console.log(`This number is even :-`,result);

    // var result = num%2==0 ? "true":"false";  // if no return value
    // console.log(`Is number 44 even :-`,result);

    // var result = num%2==0 ? "true":"false";
    // console.log(`Is number 0 even :-`,result);

    // var result = num%2==0 ? "true":"false";
    // console.log(`Is number 101 even :-`,result);


}
  var result = isEvenOrOddNum(29);
  var result = isEvenOrOddNum(44);
  var result = isEvenOrOddNum(0);
  var result = isEvenOrOddNum(101);


console.log(`-----------Step 3:- FE with one arg and return value---------------------------------`);
function wordLength(name){
    var res = name.length;
    var result = res%2==0 ? "even" :"odd" ;
    
    console.log(`The given string is:-`,name);
    console.log(`Length of the given String is:-`,res);
    console.log(`This string value is:-`,result);
    console.log(`****************************************`);

}
 var result = wordLength("JavaScript");
 var result = wordLength("developer");
 var result = wordLength("Google");
