
console.log(`--------------------------Step 1:-One string value with arguments--------------------------------------`);
function squareOfWordLength(str){
    var strlength = str.length; 
    var res = strlength*strlength;
    
    console.log(`The given String is:- ${str}`);
    console.log(`The given string length is:- ${strlength} and its square is:- ${res}`);

}
var result = squareOfWordLength("Javascript");
var result = squareOfWordLength("Google Chrome");
var result = squareOfWordLength("Developer Smart");


var str = function(){
    str = "I am Angular Developer"
    var len = str.length;
    var words = str.split(" ");
    var wordCount= words.length;
    var division = len / wordCount;
    var multi = len * wordCount;
    // //return wordCount;
    console.log(`--------------------------Step 2:-no argument and no return value------------------------------------`);
    console.log(`The String is:- ${str}`);
    console.log(`The String length is:- ${len}`);
    console.log(`The total no of word in the given string is:- ${wordCount}`);
    console.log(`The division of String length and total no of word in given string is:- ${division}`);
    console.log(`The multiplication of String length and total no of word in given string is:- ${multi}`);

}
str();