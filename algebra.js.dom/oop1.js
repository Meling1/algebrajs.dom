/* 1. pratite kod u script.js.
2. nadite prototip objetka "character"
(naputak: koristite metode globalnog object objekta).
nađite prototip tog prototipa. ipsisite ih.
3. dodajte prototipu objekta "character" funkciju koja vraca jedan
(slucajno odabran) citat iz niz "quotes".*/

var character = {
    name: "eleven",
    show: "Stranger things",
    portrayedBy: "Millie Bobby Brown",
};

const quotes = [
    "I'm going to my friends. I'm going home.",
    "pure fuel! pure fuel! WOO!",
    "see? Zoomer.",
    "bitchin",
];

var proto1 = Object.getPrototypeOf(character);
console.log(proto1);

//prototip prototipa == null
var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);

proto1.dodaj = function (){
    let x = Math.random() * quotes.length;
    let flor = Math.floor(x);
    console.log("random= " + x);
    console.log("floor= " + flor);

    return quotes[flor]; //quotes[0];
};

console.log(proto1.dodaj());
