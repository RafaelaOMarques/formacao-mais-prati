const prompt = require("prompt-sync")();

let notas = prompt("Informe as duas notas recebidas (separe por uma vírgula): ")
  .split(",")
  .map((nota) => parseInt(nota));

let media = (notas[0] + notas[1]) / notas.length;

media >= 6
  ? console.log(`PARABÉNS! Você foi aprovado`)
  : console.log(`Você foi REPROVADO! Estude mais`);
