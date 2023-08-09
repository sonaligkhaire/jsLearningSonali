

const arrayNums = [20,3,4,56,90,400,49];
console.log(`The original Array is : ${arrayNums}`);

console.log(`------Step 1 - perform shallow clone on arrayNums & Print Shallow Clone array with Values & log it---------`);
let newArray = arrayNums.push(55,66);  //shallow clone
console.log(`The cloning Array is :${arrayNums}`);

//const arrayNums = [20,3,4,56,90,400,49];

//console.log(`------step 2 -deep clone using object.assign method---------`);
// let newArray1 = Object.assign({} , arrayNums);  //using object.assign 
//  newArray1 = arrayNums.push(10,25);
// console.log(`newArray Details : ${arrayNums} `);


// console.log(`----------Step 2 - Deep clone Using concat method------------------`);
// let newArray3 = arrayNums.concat(10,25);
// console.log(`The original and clonning array is : ${newArray3} `);

console.log(`---------step 2- deep clone using spread operator-----------`);
let newArray2 = {...arrayNums};           //
console.log(`After Deep cloning : ${arrayNums.push(10,25)}`);
console.log(arrayNums);



console.log(`-----Step 3 - Merge or concat the Array with 'arrayNums' using spread operator & log it----------`);

let arrayEven = [2,30,14,8];
//const arrayNums = [20,3,4,56,90,400,49];  //this on comment bcoz it already given on top line it is not repeated bcoz its constant.

// console.log(`---------concat 'arrayNums' Array with 'arrayEven' Array.............`);
// let arr = arrayNums.concat(arrayEven);
// console.log(arr);

 const ar = [...arrayNums,...arrayEven];
 console.log(`Merge two Array : [${ar}]`);


 console.log(`--------Step 4- Employee Details:------------------------`);
 const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR"

    },
    address : {
        locality : {
            colony :"OM Vrindavan Society",
            street :"Kanch Pokli, 431202",
        },
        city :"Mumbai",
        state : "Maharashtra",
        country : "India"

    },
    mobiles : ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
 }

 console.log(`Address of Employee is: ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}`);
 console.log(`Mobile Numbes : ${employee_info.mobiles}.`);

 console.log(`-------Step 6-deep copy using JSON.Stringfy()------------------`);
 let employee_infoChange = JSON.parse(JSON.stringify(employee_info));  //deep clone

 employee_infoChange.salary.july_month = "80,0000INR";
 console.log(`Given Employee july_month Salary is : ${employee_info.salary.july_month}`);
 console.log(`Original Updated july_month Salary is : ${employee_infoChange.salary.july_month}`);

console.log(`==========================================================`);
 employee_infoChange.address.country = "United Kingdom";
 console.log(` Given Employee Country is : ${employee_info.address.country}`);
 console.log(`Original Updated Country is : ${employee_infoChange.address.country}`);



