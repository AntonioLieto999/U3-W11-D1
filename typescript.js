// 1- principali tipi primitivi di typescript sono:
console.log("PRIMITIVI : string, number, boolean, null, undefined");
// 2-
var nome = "Antonio";
var anni = 25;
var Studio = true;
// 3-
var greet = function (nome) {
    return "ciao " + nome;
};
console.log(greet(nome));
// 4-
var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 5), typeof sum(2, 7));
// 5-
function iva(num) {
    return num + num * 0.22;
}
console.log(iva(200));
// 6-
function parole(x, y) {
    return x.length + y.length;
}
console.log(parole("giovanni", "lorenzo"));
// 7-
var typeUnion;
// 8-
var container;
// 10-
var numbers = [1, 2, 3, 4, 5];
var numbers1 = [6, 7, 8, 9];
// 11-
var tupla = ["a", "b", "c", 10, 20];
var studenti = [
    { nome: "antonio", voto: 18 },
    { nome: "giuseppe", voto: 24 },
    { nome: "giovanni", voto: 30 },
    { nome: "alessando", voto: 26 },
];
// 17-
var MiaAuto = {
    modello: "Fiat",
    anno: 1999,
    Nitro: false,
    cerchiInLega: true,
    porte: 5,
};
