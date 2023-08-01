



//Print Reverse String.........................
function reverseString(str) {
    let reverse= "";
    console.log(`The given String is:-${str}`);
    for (let index = str.length-1; index>=0; index--) {
        const char = str.charAt(index);
        if(char!==' '){
            reverse = reverse.concat(char);
        }     

    }
    console.log(`Reverse String is:-${reverse}`);
    //console.log(reverse);
}
reverseString("Hard work always pays back");


console.log(`-------------------------------------------------`);
function reverseString(str1) {
    let reverse1= "";
    console.log(`The given String is:-${str1}`);
    for (let index = str1.length-1; index>=0; index--) {
        const char = str1.charAt(index);
        if(char!==' '){
            reverse1 = reverse1.concat(char);
        }     

    }
    console.log(`Reverse String is:-${reverse1}`);
    //console.log(reverse1);
}
reverseString("Soon I will be Angular IT Champ");