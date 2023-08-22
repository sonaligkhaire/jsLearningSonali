


// function add(num1, num2, ...num ){
//     
//      
//      console.log(`Addition of number is :${division} `);
// }
//  division(8);

function add(num1, num2, ...num ){
     console.log(`---------------Addition of given number using rest paramenter--------------------`);
     var sum = num1 + num2;

     for (let index = 0; index < num.length; index++) {
         sum+= num[index];
        
     }
     console.log(`Given number are : ${num1} , ${num2} and ${num} and addition of this numbers is : ${sum} `);
     //console.log(`num1 ${num1},  num2 ${num2}`);
//     //console.log(num);

}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);
//division(8);