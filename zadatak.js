// Load the full build.
var _ = require('lodash');

//1.

var dobro ="1234567890111";
var lose ="1123456";

var jedinstveniZnakovi = function(password){

    var mojNiz = [];
    for (let i =0; i < password.length; i++){
     var numToCheck = password.charAt(i);
   
   //  console.log(numToCheck + "is integer = " + isBroj(numToCheck));
   if (!isBroj(numToCheck)){
    console.log(numToCheck + " nije broj");
  
if (mojNiz.includes(numToCheck)){
    console.log(numToCheck + " vec postoji u nasem nizu");
   //break; 
   return false;
}
else {
    console.log(numToCheck + " NE postoji u nasem nizu");
    mojNiz.push(numToCheck);
}
    }
    return true;
};

function isBroj(broj){
return !isNaN(broj);
}
}

function IsMoreThan10(password){
    if(password.length > 10){
        return true;
    }

return false;
}

function skratiNa10(password){
   if (password.length <=10) return password;
   /* var tmpPassword = "";
    for (let i = 0; i < 10; i++){
        var charAtIndex = password.charAt(i);
        tmpPassword += charAtIndex;
    } 
return tmpPassword; */
return password.substring(0,10);
}



console.log("password je ispravan: " + jedinstveniZnakovi(dobro));
//jedinstveniZnakovi(dobro);
console.log("-------------------")
//jedinstveniZnakovi(lose);
console.log("password je ispravan: " + jedinstveniZnakovi(lose));

console.log("password ima vise od 10 znakova: " + IsMoreThan10(dobro));
console.log("password ima vise od 10 znakova: " + IsMoreThan10(lose));

console.log("password nakon skracivanja: " + skratiNa10(dobro));
console.log("password nakon skracivanja: " + skratiNa10(lose));