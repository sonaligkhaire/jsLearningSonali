

let bankSbi = {
    bankName : "SBI Bank",
    accountNo : 568333429654,
    ifscCode : "SBIS0003",
    state :"MH"

}

let bankLocation = {
    street :"Ekta Nagar",
    city : "Mumbai",
    pinCode : 410501
}
let AxisBank = Object.assign({}, bankSbi);
console.log(`After Cloning of AxisBank: ${AxisBank.bankName}`);

console.log(`----Using spread operator------------`);
let bankDetails = {...bankLocation}
console.log(`After Cloning : ${bankLocation.city}`);


let rateOfInterest = {
    homeLoanInterest : 0.7,
    personalLoan : 1.5,
    dueInterest : 3.8

}

console.log(`-------------------merged object by Using for in loop---------------------`);
let mergedObject = Object.assign({} , AxisBank , bankDetails , rateOfInterest);
console.log(mergedObject);


for (const key in mergedObject) {
    if (Object.hasOwnProperty.call(mergedObject, key)) {
        const element = mergedObject[key];
        console.log(element);
        
    }
}