

console.log(`=============================Assignment no 3==========================================`);
function gradeCalculation(marks){
    var grademark = +marks; 
       if (marks<=0 || isNaN(grademark) || marks>100) {
        console.log(`As per your marks ${marks}, your marks is invalid, please provide the valid marks.`); 
    } else if(marks>=90 ){
       console.log(`Funtastic Marks:${marks}, your grade is A+`);
    }
        else if (marks>=75 && marks<90) {
            console.log(`Excellent Marks ${marks}, your grade is A`); 
        } else if(marks>=50 && marks<75) {
            console.log(`Good Marks ${marks}, your grade is B`);
        }else if(marks>=35 && marks<50){
            console.log(`Marks is ${marks}, your grade is C, Need improvement`);
        }else{
            console.log(` Mark is:${marks}, Student is Fail..............`);
        }
    }
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);