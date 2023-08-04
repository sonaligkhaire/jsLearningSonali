//name degree mob



let professor = {
    name : "Shilpa gawade",
    education:"B.sc.(IT)",
    college :"s.j.r.s college",
    age :45,
    isMarried : "true",
        degrees : {
            enginnering : 'CSC',
            PHD : 'Advanced Computing',
            master : "IT",
            PHDCollege : 'Mumbai University',
            city :'pune',
            state :'Maharashtra',
                concatDegrees : function(){
                    
                    console.log(`Teacher Degrees : ${this.enginnering} , ${this.PHD}, ${this.master}, ${this.PHDCollege} , ${this.city}, ${this.state}`);
                }
        },
        certificate : ["Hacker Rank Participation","Certificate in IFE Course","Certificate in Adv Programming"],
        
    }
    console.log(`---------(1) Print Key Value----------------------- `);
    console.log(professor); 
    console.log(`---------(2) Print Nested Object-----------------`); 
    console.log(professor.degrees);
    console.log(`-----------(3) Add one array--------------------`);
    console.log(professor.certificate);
    console.log(`------------(4) concat all degrees---------------------`);
    console.log(professor.concatDegrees);
    console.log(`-----------(5) Add totalExperience Property-------------`);
    console.log(`added value of professor experience is :${professor.totalExperience = "14 years"}`);
    console.log(professor);
    console.log(`-------(6) Modify existing property------------------`);
    console.log(professor.totalExperience);
    professor.age = 50;
    console.log(`Profrssor Age Is:`,professor.age);
    console.log(`---------(7) Added 1 new certificate at the end of array & log it---------`);

    professor.certificate.push("Oracle Certified");
    console.log(professor.certificate);
    
    
        

