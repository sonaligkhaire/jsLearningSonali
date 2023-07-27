// function TCS(gradScore, hscScore, sscScore, candidateName){
//     var eligibility =  gradScore>= 70 || hscScore >= 80 || sscScore >= 90 ?
//     `Congratulation "${candidateName}" you are eligible for TCS interview` :
//     `Unfortunately "${candidateName}" you are not  eligible for  the TCS interview`;
//     console.log(eligibility);

// }
// TCS(80,86,90,"Sonali");
// TCS(70,65,55,"Shruti");
// TCS(60,79,88,"Abhishek");


function tcs(gradScore, hscScore,sscScore,candidateName){
var gradScore = 80;
var hscScore = 86;
var sscScore = 90;

console.log(`====================================Assignment no 1=======================================================`);
var result = (gradScore >= 70 || hscScore>=80  || sscScore>=90) ? "Congrates Sonali, you are eligible for TCS interview.":" Sonali,Unfortunately you are not eligible for TCS interview.";
console.log(result);

var gradScore = 70;
var hscScore = 65;
var sscScore = 55;
var result = (gradScore >= 70 && hscScore>=80  && sscScore>=90) ? "Congrates Shruti, you are eligible for TCS interview.":" Shruti,Unfortunately you are not eligible for TCS interview.";
console.log(result);

var gradScore = 60;
var hscScore = 79;
var sscScore = 88;
var result = (gradScore >= 70 && hscScore>=80  && sscScore>=90) ? "Congrates Abhishek, you are eligible for TCS interview.":" Abhishek,Unfortunately you are not eligible for TCS interview.";
console.log(result);

}
tcs();




// var interviewEligibility = function (gradScore, hscScore, sscScore, candidateName){
//      var result = gradScore >= 70  || hscScore >= 80 // true || false => true , true || false =>true
//      ? `Congrate {candidateName} you are eligible for TCS interview.`
//     : `Unfortunately you are not eligible for interview`
//     console.log(result);
// }
// interviewEligibility(80, 86, 90, "Sona");