

console.log(`===========================Assignment No 2===========================================`);
console.log(`----------------------------------Step 1:----------------------------------------------`);
var voteEligible = function(age){
       var voteAge = +age; 
       if (age<=0 || isNaN(voteAge) || age>130) {
        console.log(`As per your age ${voteAge}, your age is invalid. Please enter valid age`); 
    } else {
        // if block to handle all valid scenarios
        if (age>=18) {
            console.log(`As per your age ${voteAge}, you are eligible for vote`);
        } else {
            console.log(`As per your age ${voteAge},  you are not eligible for vote`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);


