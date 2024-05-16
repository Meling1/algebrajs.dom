// constructor Osoba
function Osoba(){
    (this.ime = "Ana"), (this.godine = 25);
}

var osoba1 = new Osoba();
osoba1.BrojCipela = 38;
osoba1.pozdrav = function (){
    return "ćao";
}

console.log("osoba1 => ime: " + osoba1.ime + "; ima godina: " + osoba1.godine);

Osoba.prototype.spol = "Žensko";

console.log("Osoba1 => ime: " + osoba1.ime + "; ima godina: " + osoba1.godine + "; spol: " + osoba1.spol);

 var osoba2 = new Osoba();
 osoba2.BrojCipela = 38;
 osoba2.godine = 35;
 osoba2.ime = "Marko";
 osoba2.spol = "Muški";
 osoba2.pozdrav = function (){
    return "bok";
 }
 console.log("Osoba2 => ime: " + osoba2.ime + "; ima godina: " + osoba2.godine + "; broj cipela: " + osoba2.BrojCipela);