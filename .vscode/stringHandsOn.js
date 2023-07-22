
function stringHandOn(){
    var res = "  Hey you are doing good, keep it up   ";

    console.log('-------------------------------Step 1--------------------------------------------');
    console.log(`Print the String as it is:${res}`);

    console.log('------------------------------Step 2:---------------------------------------------');
    var length = res.length;
    console.log(`Length of String is: ${length}`);

    console.log('-----------------------------Step 3:---------------------------------------------');

}
stringHandOn();


var res = "  Hey you are doing good, keep it up   ";
var result = res.trim();
// console.log(`Remove Extra Spaces in String:${result}, And its Length:${result.length}`);
console.log(`Before Trim String length :- ${res.length}, After Trim string is:- ${result} and it's length is:- ${result.length}`);

console.log('-----------------------------------------Step 4:-------------------------------------');
var resBeforeTrim = res.trimStart();
var resAfterTrim = res.trimEnd();
var before = res.length - resBeforeTrim.length;
var after = res.length - resAfterTrim.length;
var extraSpaces = before + after;

console.log(`Removing The Ending Spaces:-${resAfterTrim}`);
console.log(`Removing The Ending Spaces And Its Length is:-${resAfterTrim.length}`);
console.log('-----------------------------------------------------------------------------');

console.log(`Removing the Starting Spaces:-${resBeforeTrim}`);
console.log(`Removing the Staring Spaces And Its Length is:-${resBeforeTrim.length}`);
console.log('------------------------------------------------------------------------------');

console.log(`Total No Of Spaces Remove in Starting String is:-${before}`);
console.log(`Total No Of Spaces Remove in Ending String is:-${after}`);
console.log(`Total No Of Extra Spaces Removed In Step 3 is:-${extraSpaces}`);
console.log('--------------------------------Step 5:--------------------------------------------');


var res = "Hey you are doing good, keep it up";
var letter = res.charAt();

console.log(` Print The First Char After Trim :- ${res.charAt(0)}`);
console.log(` Print The Last Char After Trim :- ${res.charAt(res.length-1)}`);





var res = "Hey you are doing good, keep it up";
console.log(`...................................Step 6-------------------------------------------------`);
 var count = res.split(' ');
 var tot = count.length;
 console.log(`Given String = ${res}`);
 console.log(`Total number of word are ==> ${tot}`);

console.log('--------------------------------Step 7:----------------------------------------------');
var res = "Hey you are doing good, keep it up";
var display = res.indexOf('good');
console.log(`Print the index of the word "good" is = ${display}`);
console.log('--------------------------------------step 8:-------------------------------------------');
var subString = res.substring(22)
var slice = res.slice(22)
console.log(`Substring of index 22 is:-${subString}`);
console.log(`Slice of index 22 is:-${slice}`);

console.log(`--------------------------------------Step 9:--------------------------------------------`);
var result = res.endsWith("up");
console.log(`Is String Ends With Words "up"? = ${result}`);

console.log(`----------------------------------------Step 10:-------------------------------------------`);
var result = res.startsWith("Hey");
console.log(`Is String Start With Words "Hey"? = ${result}`);


