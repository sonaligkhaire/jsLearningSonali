

let result;

result = 0==' ';
console.log(`(1)The ' ' is onverted into a zero(0) & '0' == 0 is true then result is:`,result); 
console.log(`------------------------------------------------------------------`);

result = 0=='0'; // == is comparison
console.log(`(2)The (string value)0 is converted into a (number value)0 & 0 == 0 is true then result is:`,result); 
console.log(`------------------------------------------------------------------`);


result = 0==false;
console.log(`(3)The false(boolean value) is converted into a number value(0) & 0 == 0 is true then result is:`,result); 
console.log(`------------------------------------------------------------------`);


result = null==undefined;
console.log(`(4)The undefined(boolean) is converted into a 0(false value) & 0 == 0 it means false == false then result is:`,result); 
console.log(`------------------------------------------------------------------`);


result = 1==[1];
console.log(`(5)The [1] is called array and it returns 1(index) value & 1 == 1 is true then result is:`,result); 
console.log(`------------------------------------------------------------------`);


result = 1==true;
console.log(`(7)The true(boolean value) is converted into a number(1) & 1 == 1 is true then result is:`,result); 
console.log(`------------------------------------------------------------------`);


result = 1=='1';
console.log(`(8)The 1(string value) is converted into a number value(1) & 1 == 1 is true then result is:`,result); (6)