const prompt = require("prompt-sync")();
let elementos = 0;
let numerosInformados = [];
numerosPares = [];
let posicoesPares = [];

while (elementos < 10) {
  let numero = prompt("Informe um numero: ");
  numerosInformados.push(numero);
  if (numero % 2 == 0) {
    numerosPares.push(numero);
    posicoesPares.push(elementos);
  }
  elementos++;
}

console.log(`O numeros informados foram: ${numerosInformados}`);
console.log(`O numeros Pares informados foram: ${numerosPares}`);
console.log(
  `As posições dos números pares no array original são: ${posicoesPares.join(
    ", "
  )}`
);
