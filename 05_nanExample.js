

//numeric string used with + gives string type


let result;

console.log(`=================Step 1:-Implicite conversion to String==============================================`);
result = '3' + 2;
console.log(`(1)The Addition of '3'(string value) and 2 (number value) is: ${result}`);
console.log(`[In this implicit conversion 2 is converted into a String value & it result
 gives '32' string value like a concatinations of two string ]`);
console.log(`----------------------------------------------------------------------------------------------------------`);


 result = '3' + true; 
console.log(`(2)The Addition of '3'(string value) and true (boolean value) is: ${result}`);
console.log(`[In this implicit conversion "true" is converted into a String value]`);
 console.log(`----------------------------------------------------------------------------------------------`);


result = '3' + undefined;
console.log(`(3)The Addition of '3'(string value) and undefined (undefined value) is: ${result}`);
console.log(`[In this implicit conversion "undefined" is converted into a String value]`);
console.log(`----------------------------------------------------------------------------------------------------`);

result = '3' + null;
console.log(`(4)The Addition of '3'(string value) and undefined (undefined value) is: ${result}`);
console.log(`[In this implicit conversion "null" value is converted into a String value]`);
console.log('----------------------------------------------------------------------------------------------------');



//if boloean is used, true is 1, false is 0

//let result;
console.log(`======================Step 2:-Implicite boolean conversion to Number==================================`);
result = '4' - true;  //3
console.log(`(1)The Substraction of '4'(string value) and true(boolean value) is: ${result}`);
console.log(`[In this boolean conversion "true" is converted to number which is 1]`);
console.log('---------------------------------------------------------------------------------------------------------------------');

result = 4 + true;  //5
console.log(`(2)The Addition of '4'(string value) and true(boolean value) is: ${result}`);
console.log(`[In this boolean conversion "true" is converted to number which is 1]`);
console.log(`---------------------------------------------------------------------------------------------------`);


result = 4 + false;  //4
console.log(`(3)The Addition of '4'(string value) and false(boolean value) is: ${result}`);
console.log(`[In this boolean conversion "false" is converted to number which is 0]`);
console.log(`----------------------------------------------------------------------------------------------------`);



//numeric string used with -, / , * results number type


//let result;    //already given in top line
console.log(`===========================Step 3:-Implicit string conversion to Number=================================`);
result ='4' - '2';  //2
console.log(`(1)The Subtraction of '4'(string value) and 2(string value) is: ${result}`);
console.log(`[In this String conversion '4' & '2' this 2 string is converted to number & got a result in number]`);
console.log('---------------------------------------------------------------------------------------------------');


result ='4' - 2;  //2
console.log(`(2)The Subtraction of '4'(string value) and 2( number value) is: ${result}`);
console.log(`[In this String conversion '4' is converted to number & automatically got result in number]`);
console.log('-----------------------------------------------------------------------------------------------------');


result ='4' * 2;  //8
console.log(`(3)The Multiplication of '4'(string value) and 2(number value) is: ${result}`);
console.log(`[In this String  conversion '4' is converted to number &  automatically got result in number]`);
console.log('-----------------------------------------------------------------------------------------------------');


result ='4' / 2;  //2
console.log(`(4)The Division of '4'(string value) and 2(number value) is: ${result}`);
console.log(`[In this String conversion '4' is converted to number &  automatically got result in number]`);
console.log('-------------------------------------------------------------------------------------------------------------');