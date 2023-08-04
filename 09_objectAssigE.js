


let sbiBank = {
    bankName : "SBI Bank",
    location :"pune",
    accountNo : 374747492029,
    ifsc : "SBIN000023",
    interestRate :6.7,
    showDetails : function() {
        console.log(`SBI Bank Details:`,sbiBank);
}
        }
sbiBank.showDetails();

let axisBank = {
    bankName : "Axis Bank",
    location :"mumbai",
    accountNo :647456776290,
    ifsc : "AXISC000783",
    interestRate :4.7,
         showDetails : function() {
            console.log(`Axis Bank Details:`,axisBank);
}
}
axisBank.showDetails();

let hdfcBank = {
    bankName : "HDFC Bank",
    location :"pune",
    accountNo : 765765247654,
    ifsc : "HDFC093202",
    interestRate :7.2,
    showDetails : function() {
        console.log(`HDFC Bank Details:`,hdfcBank);
}
}

hdfcBank.showDetails();


let yesBank = {
    bankName : "YES Bank",
    location :"nashik",
    accountNo : 765216788765,
    ifsc : "YESD03949",
    interestRate :3.9,
    showDetails : function() {
        console.log(`YES Bank Details:`,yesBank);
}
}
yesBank.showDetails();