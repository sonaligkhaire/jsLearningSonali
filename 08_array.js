

//index of array is:- array[0]=10, array[1]=20, array[3]=30,........array[6]=20
 //let array = [10,20,30,50,10,80,20];
 var array = [10,20,30,50,10,80,20]; // ar is used to redeclared the value....
 console.log(array);
 console.log(`Type of array is:- ${typeof array}`);

 console.log(`Total no of element in array is: ${array.length}`);
   let element2= array[2];
   console.log(`element stored at index 2 is: ${element2}`);

   let element3 = array[0];
   console.log(`element stored at index 0 is: ${element3}`);

   //find last element......................
   let  arrayLength = array.length;
   let elementLast = array[arrayLength-1];
   console.log(`Last element is: ${elementLast}`);

   // find third last element.......
   //let  arrayLength = array.length;
   let elementThirdLast = array[arrayLength-3];
   console.log(`Last element is: ${elementThirdLast}`);

   console.log(`---------------------------------------------------------------`);
   //update the 2nd element
   array[1] = 100;
   console.log(array);

   let isAvailable = array.includes(80);
   console.log(`Is 80 available: ${isAvailable}`);

   //find element of 50 find index......
   let indexOfElement= array.indexOf(50);
   console.log(`Index of 50 is : ${indexOfElement}`);

   console.log(`----------------Array traversing----------------------------`);
   //array traversing.....using for loop
   array[0];

   //array of length is 7//
   for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
   }

   console.log(`---------------Array traversing in-reverse order--------------------`);
   // array traversing in reverse order
   for (let index = array.length-1; index >=0 ; index--) {
    const element = array[index];
    console.log(element);
   }


   console.log(`---------------log even index ed element--------------------`);
   // array traversing in reverse order
    // for (let index = 0; index < array.length ; index = index+2) {
    //  const element = array[index];
    //  console.log(element);
    // }  
//means log  index of array[0],array[2],array[4],array[6].....
//OR//
 for (let index = 0; index < array.length; index++) {
     if (index%2==0) {
         const element = array[index];
         console.log(element);
     }
    
 }

 console.log(`---------inserting element 1st and last position---------------------------------`);
  var array = [10,20,30,50,10,80,20];
  //insert last element
  array.push(70); 
  array.push(300,500); 
  //insert 1st(beginning) element
  array.unshift(60); 
  array.unshift(21,41,61);
  console.log(array);

  console.log(`------------removing element in the oth index and last index----------------------------`);
  var array = [10,20,30,50,10,80,20];
  //remove last element
  array.pop();
  array.shift();  //remove first element
  console.log(array);


  console.log(`---getting the slice from array------------`);
  var array = [10,20,30,50,10,80,20]; //redeclared the array
 console.log(array.slice(3));
 console.log(array.slice(1,4));

 console.log(`----Performing insert or remove operation in array-------`);
 var array = [10,20,30,50,10,80,20];
 let removeElement = array.splice(4); //index value 4 to till end remove array
 console.log(array);
 console.log(removeElement);

 console.log(`----removing the array element using splice()---------`);
 var array = [10,20,30,50,10,80,20];
 let elementRemove = array.splice(4,2); //index 4 se 2 element remove 
 console.log(array);
 console.log(elementRemove);
 //array.splice(array.length-2,2);///remove last 2 element
 //array.splice(array.length-4,4);///remove last 4 element

 console.log(`----inserting the array element using splice()---------`);
 var array = [10,20,30,50,10,80,20];
 console.log(array);
 array.splice(3,0,100,200,300,600); //(insert index position,replace element,insert element,insert element,insert element,insert element);
 console.log(array);

 console.log(`----------replace and insert element using splice()------------------------------`);
 var array = [10,20,30,50,10,80,20];
 console.log(array);
 //4th index se 2 value replace and insert new 4 value
 array.splice(4,2,33,55,66,77);
 console.log(array);