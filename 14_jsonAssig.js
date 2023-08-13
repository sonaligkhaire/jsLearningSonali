

let jsonemployeeInfo = `{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev","DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" :{
        "street" : "32, Laham St.",
        "city" : "Innsbruck",
        "country" : "Austria"
    },
    "referred-by" :"E0012"
}`;
console.log(`---------Convert this one to Object--------------------`);
const employee = JSON.parse(jsonemployeeInfo);  //convert to object
console.log(employee);

  //const emp = {};
  console.log(`-------------Log on console role -> 'Dev'------------------------`);
  const arrayRole = employee.role;
  for(const role of arrayRole){
  if(role == 'Dev'){
        console.log(`The 1st Array of role element is: ${role}`);
      }

  }

  console.log(`-----------Log Only Last Name-------------`);
const employyeName = employee.name;//used for loop substring or split
console.log(`The employee name is : ${employyeName}`);

let employeeSplit = employyeName.split(" ");
console.log(`After applying split method result is: ${employeeSplit}`);


const empLength = employeeSplit[employeeSplit.length-1];
console.log(`Last  name of employee is : ${empLength}`);


console.log(`----------------------joining year of employee----------------------------`);
const empDoj = employee.doj;
console.log(`The employee date of joining is :${empDoj}`);
let employeeSplit1 = empDoj.split("-");

let employeeYear = employeeSplit1[employeeSplit1.length-1];
console.log(`Joining year of the employee is : ${employeeYear}`);


