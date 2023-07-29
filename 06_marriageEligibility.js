var marriageEligibility = function(gender , age){
    // var gendervalue = +gender;
    // var agevalue = +age;
    if (gender=="Male" && age>=21 || gender=="Female" && age>=18 ) {
        console.log(`Gender is:${gender} and Age is:${age} , is eligible for marriage.....`);
    } else {
        console.log(`Gender is:${gender} and Age is:${age} , Please enter valid input data.....`);
    }

}
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);