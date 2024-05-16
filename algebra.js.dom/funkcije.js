//1. pratite

/*2. od funkcije od prvom zadatku
 stvorite samopozivajucu anonimnu funkciju koja
  prima parametar "name". 
  kreirajte globalnu varijablu koju ta funkcija
   koristi i zadajte joj vrijednost. */

   var x = "john doe";
   function vratiNesto(name){
    var x = name;
    function f(){
        return x;
    }
     return f;
   }

   var y = vratiNesto("jane Doe");
   console.log(y); //-- y je postao funkcija

   var z = vratiNesto()(); // -- z = undefined
   console.log(z);

   z = vratiNesto("test")("test");
   console.log(z);

   //2.
   console.log("----------");
   
   var name1 = "Moje ime";

   (function vratiNesto2(name){
    console.log("invoked vratiNesto2(" + name1 + ")");
    var x = name1;
    function f(){
        console.log("invoked f ()");
        return x;
    }
    return f;
   })(name1);