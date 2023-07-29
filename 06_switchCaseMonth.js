

var monthOfYear = function(month){

    switch (month) {
        case 1:
          console.log(`${month} - January`);
          console.log(`January is the 1st Month`);
          break;
        case 2:
          console.log(`${month} - February`);
          console.log(`February is the 2nd Month`);
          break;
        case 3:
          console.log(`${month} - March`);
          console.log(`March is the 3rd Month`);
          break;
        case 4:
          console.log(`${month} - April`);
          console.log(`April is the 4th Month`);
          break;
        case 5:
          console.log(`${month} - May`);
          console.log(`May is the 5th Month`);
          break;
        case 6:
          console.log(`${month} - June`);
          console.log(`June is the 6th Month`);
          break;
        case 7:
          console.log(`${month} - July`);
          console.log(`July is the 7th Month`);
          break;
        case 8:
          console.log(`${month} - August`);
          console.log(`August is the 8th Month`);
          break;
        case 9:
          console.log(`${month} - September`);
          console.log(`September is the 9th Month`);
          break;
        case 10:
          console.log(`${month} - Octomber`);
          console.log(`Octomber is the 10th Month`);
          break;
        case 11:
          console.log(`${month} - November`);
          console.log(`November is the 11th Month`);
          break;
        case 12:
          console.log(`${month} - December`);
          console.log(`December is the 12th Month`);
          break;
        default:
            console.log(`${month} - In valid input`);
            console.log(`Please provide valid month `);
          break;
      }
      console.log(`------- End of switch case ---------`);
    };
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);