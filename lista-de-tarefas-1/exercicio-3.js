const prompt = require("prompt-sync")();

let numeros = prompt("Informe 4 números inteiros (separe por uma vírgula): ")
  .split(",")
  .map((numero) => parseInt(numero));

let somando = numeros[0] + 25;
let triplo = numeros[1] * 3;
let percentagem = numeros[2] * (12 / 100);
numeros[3] = numeros[0] + numeros[1] + numeros[2];

console.log(
  `O resultado das operações é: ${somando}, ${triplo}, ${percentagem} e ${numeros[3]}`
);
