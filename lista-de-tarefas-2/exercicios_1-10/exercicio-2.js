const prompt = require("prompt-sync")();

let velocidadeAtual = parseInt(
  prompt("Há quantos kilometros por hora esta o veículo? ")
);
let velocidadeMaxima = 80;
let multa = (velocidadeAtual - velocidadeMaxima) * 5;

velocidadeAtual > velocidadeMaxima
  ? console.log(`Você sera multado em R$${multa.toFixed(2)} reais`)
  : console.log("");
