

//Print total no vowels including small & capital letters in while loop
console.log(`---------------------------------------------Step 1:---------------------------------------------`);
function vowl(str) {
    console.log(`The Given String is:- ${str}`);
   let count = 0;
   let i = 0;
   while (i<str.length) {
    let char = str.charAt(i);
    i++;
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') 
        {
            //console.log(char); 
            count = count + 1;
        }
   }
   console.log(`The Total no of vowels is:- ${count}`);
}
vowl("I am very good IT Developer");







 // Print sum of Cubes of nos 1 to 5.....
 console.log(`-------------------------------Step 2:--------------------------------------`);
let sumCube = function(){
     let sumOfCube = 0;
 for (let index = 1; index <= 5; index++) {
    sumOfCube = sumOfCube + index * index * index;
    
     }
     console.log(`Sum of cube is: ${sumOfCube}`);
 }
sumCube();


 // print string odd position of characters without spaces
// console.log(`-------------------------------Step 3:------------------------------------`);
 function oddPositionedChars(str){
     console.log(`The String is:- ${str}`);
      let String = " ";
     for (let index = 0; index < str.length; index++) {
         //log only odd positioned chars on console and do not consider empty spaces
         const char = str.charAt(index);
        if(index%2!=0 && char!=' ')   {
            String = String.concat(char);
        }     
         
     }
     console.log(`The odd positions of characters without empty Spaces is:- ${String}`); 
 }
 oddPositionedChars("Hard work always pays back");


 console.log(`...............................................................................`);
 function oddPositionedChars(str){
     console.log(`The String is:- ${str}`);
      let String = " ";
     for (let index = 0; index < str.length; index++){ 
         //log only odd positioned chars on console and do not consider empty spaces/        
          const char = str.charAt(index);
         if(index%2!=0 && char!=' ')   {
             String = String.concat(char);
         }     
         
     }
     console.log(`The odd positions of characters without empty Spaces is:- ${String}`); 
 }
oddPositionedChars("Soon I will be Angular IT Champ");
