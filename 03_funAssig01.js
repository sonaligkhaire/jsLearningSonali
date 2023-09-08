
function sum(){
    console.log('--------------------------------------Assignment=>--------------------------------------------------');
    console.log('*********************step 1:- function with no arguments & n0 return type***************************');
    console.log('Welcome To JavaScript..!!');
    console.log('I Am Fresher');
}
sum();

function personalDetails(firstName , lastName, collegeName){
    var firstName = "Sonali";
    var lastName = "Khaire";
    var collegeName = "S.J.R.S College";

    console.log('***********************Step 2:-function with args & no return type*******************************');
    console.log('First Name is:-', firstName);
    console.log('Last Name is:-', lastName);
    console.log('College Name is:-', collegeName);

}
personalDetails();


function swapValues(val1, val2 ){
    val1 = "Virat";
    val2 = "Anushka";

    console.log('********************Step 3:-(Swapping Values) function with args and no return value*******************');

    console.log('Before Swapping=>  val1 is:-' ,val1 , 'And', 'val2 is:-', val2 );

    var temp = val1;
    var val1 = val2;
    var val2 = temp;
    console.log('After Swapping=>  val1 is:-', val1 , 'And', 'val2 is:-', val2);

    val1 = 1000;
    val2 = 2000;
    console.log('----------------------------AND--------------------------------------');
    console.log('Before Swapping=>  val1 is:-' ,val1 , 'And', 'val2 is:-', val2 );
   
    var temp = val1;
    var val1 = val2;
    var val2 = temp;

    console.log('Before Swapping=>  val1 is:-' ,val1 , 'And', 'val2 is:-', val2 );

}
swapValues();

function addThreeValues(arg1, arg2, arg3){
    console.log('value are: ', arg1,arg2,arg3);
    var result = arg1 + arg2 +arg3;
    return result;
}
console.log('***********************Step 4:-function with argument & no return value************************');
var res = addThreeValues(10.23,600,40);
console.log('Result is',  res);
console.log('------------------------------AND------------------------------------');
var resultValue = addThreeValues("Hello","Good", "Morning");
console.log('Result is',resultValue);


function BankDetails(val1,val2,val3,val4) {                                                 //(bankName,accountNum,location,pinCode)
    val1="ICICI Bank";
    val2=566866589754;
    val3="PUNE";
    val4=410501;
   
    console.log('******************************Step 5:- Display Bank Details**************************************');
    console.log('Bank Name is:-',val1,   'Account No is:-', val2,   'Location:-', val3,    'Pincode:-',val4);
    val1="Axis Bank";
    val2=787656798764;
    val3="MUMBAI";
    val4=400008;
     
    console.log('Bank Name is:-',val1,   'Account No is:-', val2,   'Location:-', val3,   'Pincode:-',val4);
    //OR//console.log(`Bank Name is :${val1} , Account No : ${val2} , Location : ${val3} , Pincode : ${val4}`);

    val1="HDFC Bank";
    val2=876546598761;
    val3="THANE";
    val4=400605;

    console.log('Bank Name is:-',val1,   'Account No is:-', val2,  'Location:-', val3,   'Pincode:-',val4);
}
BankDetails();

  
//OR//
// console.log(`---------------------------------------------------------------------------------------------`);
// function BankDetail(bankName,accountNum,location,pinCode) {
//     console.log(`Bank Name :${bankName} , Account No : ${accountNum} , Location : ${location} , Pincode : ${pinCode}`);
// }
// BankDetail("ICICI Bank" ,566866589754 ,"PUNE", 410501 );
// BankDetail("Axis Bank", 787656798764, "MUMBAI", 400008);
// BankDetail("HDFC Bank" , 876546598761, "THANE", 400605);