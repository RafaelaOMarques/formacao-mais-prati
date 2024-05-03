const prompt = require("prompt-sync")();

let numero = prompt("Informe um numero inteiro: ");
let i = 0;
while (i < 10) {
  console.log(numero);
  i++;
}
