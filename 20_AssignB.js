


class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22,"Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33,"Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55,"Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88,"Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99,"Mahesh", "HR", 85000, "Infy");


const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`---------Step 1--Print all employees Working "TCS" & log employee name and company-----`);      // using forof loop (iterating object)
for (const employee of arrayEmployees) {
    if(employee.emp_company=="TCS"){
    console.log(`Employee name : ${employee.emp_name} & its Company Name is : ${employee.emp_company}`);
    }
}

console.log(`-------------Step 2--find finance department employee & department and employee name-------------`);
for (const employee of arrayEmployees) {
    if(employee.emp_dept=="Finance") {
        console.log(`Employee Department : ${employee.emp_dept} , Employee Name : ${employee.emp_name} `);
    }
}

 console.log(`-------Step 3-----Print employess start with "R" & its complete employee Details------------`);
 for (const empD of  arrayEmployees) {
     if (empD.emp_name.startsWith("R")) {
         console.log(`start with "R" - Employee Details => Id : ${empD.emp_id}, Name : ${empD.emp_name}, Department: ${empD.emp_dept}, Salary : ${empD.emp_salary} and Company : ${empD.emp_company}`);
     }
 }

console.log(`------------Step 4---salary is greater than 75000 & print employee name, company and salary-----------`);
for (const employee of arrayEmployees) {
    if (employee.emp_salary > 75000) {
        console.log(`Employee Name : ${employee.emp_name}, Company : ${employee.emp_company} & its Salary is : ${employee.emp_salary}`);
        
    }
}

console.log(`------------------Step 5---Employee salary is greater than equal to 50000 & from "IT" Department,print complete detail-----------------`);
for (const employee of arrayEmployees) {
    if (employee.emp_salary >= 50000 && employee.emp_dept =="IT") {
        console.log(`Employee Details is => Employee Id : ${employee.emp_id}, Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary} & Company : ${employee.emp_company} & its Salary is : ${employee.emp_salary}`);
        
    }
}


console.log(`---------------------Step 6--Print all employees from company "Infy" & its all details------------------------------------`);
for (const emp of arrayEmployees) {
    if (emp.emp_company == "Infy") {
        console.log(`"Infy" company Employee Details => Id : ${emp.emp_id}, Name :${emp.emp_name}, Department : ${emp.emp_dept}, Salary : ${emp.emp_salary}, & its Company : ${emp.emp_company}`);
        
    }
    
}