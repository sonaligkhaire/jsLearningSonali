

 function swap(n1 , n2){ //var n1 = num1(100), var n2 = num2(200) ,n1 & n2 is called arguments or parameters
    console.log('Inside swap function');
    console.log('Before Swap=> n1', n1,"n2" , n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap => n1', n1,"n2", n2); //after swap => n1 is string value & n1 is variable
}
var num1 = 100;
var num2 = 200;
swap(num1, num2); //function call or invocation

var sweety = "Sweety";
var cuttie = "cuttie";
swap(sweety, cuttie);

var name1 = "virat";
var name2 = "Anushka";
swap(name1, name2);
console.log('End of program');