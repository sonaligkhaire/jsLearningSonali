function show(){  //function with no arguments
    console.log('my name is sonali');
    console.log('I am technical lead');
    console.log('my tech skill is -  java + Angular + React + DevOps + ');
}
show(); //function Invocation


//function with args and no return value
function checkType(value) {  //var  value = gk
    console.log('value is' , value);
    console.log('type is:' , typeof value);
    console.log('---------------------------------------------------------');
    
}
checkType(100);
checkType("GK");
checkType(true);
checkType(undefined);
checkType(null);
checkType();


//function with arguments and return value
function addition(arg1, arg2, arg3){
    console.log('value are: ', arg1,arg2,arg3);
    var result = arg1 + arg2 +arg3;
    return result;


}
// addition(10, 23,456);
// console.log('Result is' , addition(10, 23, 456));
// addition(-56, 239 , 677);
// addition('GK', 66, 'pune');

var res = addition(10,23,456);
console.log('Result is',  res);
var resultValue = addition(-56,239,677);
console.log('Result is',resultValue);

var result = addition('Gk', 'Pune', 88);
console.log('Result is' , result);