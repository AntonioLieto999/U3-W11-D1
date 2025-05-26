// 1- principali tipi primitivi di typescript sono:
console.log("PRIMITIVI : string, number, boolean, null, undefined");

// 2-
let nome: string = "Antonio";
let anni: number = 25;
let Studio: boolean = true;

// 3-
const greet = (nome) => {
  return "ciao " + nome;
};
console.log(greet(nome));

// 4-
const sum = (a: number, b: number) => {
  return a + b;
};
console.log(sum(2, 5), typeof sum(2, 7));

// 5-
function iva(num) {
  return num + num * 0.22;
}

console.log(iva(200));

// 6-
function parole(x: string, y: string) {
  return x.length + y.length;
}
console.log(parole("giovanni", "lorenzo"));

// 7-
let typeUnion: string | number;

// 8-
let container: number | null | undefined;

// 9-
type Settimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

// 10-
let numbers: number[] = [1, 2, 3, 4, 5];
let numbers1: Array<number> = [6, 7, 8, 9];

// 11-
let tupla: [string, string, string, number, number] = ["a", "b", "c", 10, 20];

// 12-
// interface: quando devi definire la forma di un oggetto o un contratto chiaro e prevedi estensioni o dichiarazioni multiple.
// type: quando vuoi definire un alias per un tipo complesso, includere unioni, tuple, tipi primitivi o comporre tipi con intersezioni.

// 13-
interface io {
  mioNome: string;
  mioCognome: string;
  mieiAnni: number;
}

// 14-
interface utente {
  email: string;
  telefono?: number;
}

// 15-
type Studenti = {
  nome: string;
  voto: number;
};

let studenti: Studenti[] = [
  { nome: "antonio", voto: 18 },
  { nome: "giuseppe", voto: 24 },
  { nome: "giovanni", voto: 30 },
  { nome: "alessando", voto: 26 },
];

// 16-
interface Veicolo {
  modello: string;
  anno: number;
  Nitro: boolean;
}

interface Auto extends Veicolo {
  cerchiInLega: boolean;
  porte: number;
}

// 17-
const MiaAuto: Auto = {
  modello: "Fiat",
  anno: 1999,
  Nitro: false,
  cerchiInLega: true,
  porte: 5,
};

// 18-
// I genenics servono a scrivere codice riutilizzabile e flessibile    -cit renato

// 19
// Si

// 20
interface responsApi<x> {
  risposta: boolean;
  dati: x;
  error?: string;
}
