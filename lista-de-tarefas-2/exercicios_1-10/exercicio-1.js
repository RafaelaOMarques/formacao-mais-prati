const prompt = require("prompt-sync")();

let cigarrosFumadosDia = parseInt(prompt("Quantos cigarros você por dia? "));
let anosFumante = parseInt(prompt("Há quantos anos você é fumante? "));

let reducaoTempoVida = 10;

let totalReduzido =
  (cigarrosFumadosDia * (anosFumante * 360) * reducaoTempoVida) / 144;

console.log(
  `Você já perdeu ${totalReduzido} dias de vida por causa do hábito de fumante`
);
