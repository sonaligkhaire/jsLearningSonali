

var globalVariable = 100;
function outer(){
    let outerFunVariable = 200;
    let innerFunction = function(){
        let innerFunVariable = 300;
        console.log(innerFunVariable);
        console.log(outerFunVariable);
        console.log(globalVariable);
    }
    //console.log(innerFunVariable);     // ===> NO,We cannot access outerFunVariable coz its scope is inside the block only & its because it have block scope  we cannot access outside the block
    return innerFunction;
    

}
outer()();
// let innerFun = outer();
// innerFun();



