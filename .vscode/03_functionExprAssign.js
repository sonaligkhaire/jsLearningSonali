

var square = function(num){
    var result = num * num;
    console.log(`------------------------Step 1:------------------------------------`);
    console.log(`Square of 5 is:- ${result}`);

}
square(5);

var square = function(num){
    var result = num * num;
    
    console.log(`Square of 6 is:- ${result}`);
}
square(6);

var square = function(num){
    var result = num * num;

    console.log(`Square of 25 is:- ${result}`);
}
square(25);

var square = function(num){
    var result = num * num;

    console.log(`Square of 100 is:- ${result}`);
}
square(100);
    
var square = function(num){
    var result = num * num;

    console.log(`Square of 67.89 is:- ${result}`);
}
square(67.89);

var square = function(num){
    var result = num * num;

    console.log(`Square of 59 is:- ${result}`);
    console.log(`----------------------------Step 2:-----------------------------------`);
    var variableName = typeof square;
    console.log(`The type of given function is=> ${variableName}`);

}
square(59);


var variableName = function(){

    console.log(`The type of function is:`);
}



var area = function(length,width) {
    var result = length*width;
    console.log(`---------------------------------Step 3:-----------------------------------`);
    console.log(`Area of rectangle is:-${result}`);
    
}
area(499,917);


//Swapping Values..........
var swapValues = function(value1, value2){

console.log(`-----------------------------------Step 4:------------------------------------------`);
console.log(`Before Swapping value is:- ${value1} and ${value2}`);


}
swapValues("Mahi" , "Raina");
var swapValues = function(value1 , value2){
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(`After Swapping value is:- ${value1} and ${value2}`);
    console.log(`--------------------------------------------------`);
}
swapValues("Mahi" , "Raina");

var swapValues = function(arg1, arg2){
    console.log(`Before Swapping value is:- ${arg1} and ${arg2}`);
}
swapValues(55,77);

var swapValues = function(arg1, arg2){
     var temp = arg1;
     arg1 = arg2;
     arg2 = temp;
     console.log(`After Swapping value is:- ${arg1} and ${arg2}`);
}
swapValues(55,77);


//5

 var strOper =function(str){

    var len = str.length;
    console.log(`---------------------------Step 5:---------------------------------------`);
    console.log(`The available of string is:- ${str}`);
     //length   chatAt(6) , charAt(11)   length-1 0   count*count log the method
    console.log(`Total no of character available in string is:- ${len}`);
    console.log(`--------------------------------------------------------`);

    var ch = str.charAt(6);
    console.log(`The character at index 6 is:- ${ch}`);

    var ch = str.charAt(11);
    console.log(`The character at index 11 is:- ${ch}`);

    var length = str.charAt(str.length-1);
    console.log(`The last character from the given string is:- ${length}`);

    var length = str.charAt(0);
    console.log(`The first character from the given string is:- ${length}`);

    var length = str.charAt(str.length-3);
    console.log(`The third last character from the given string is:- ${length}`);

    var count = str.split(" ");
     var strOper= count.length;
     
     console.log(`The total no of word in the given string is:- ${strOper}`);


     var count = strOper*strOper;
     console.log(`Square of no of word in the given string is:- ${co}`);
     return strOper;
    
     
     
    
    

}
strOper("JS is the most popular language of internet");