const prompt = require("prompt-sync")();

let somaNumeros = 0;
let somaPesos = 0;

let numero = parseFloat(prompt("Digite um número decimal (ou 0 para sair): "));
let peso = parseFloat(
  prompt("Digite o peso correspondente ao número digitado: ")
);

while (numero !== 0) {
  somaNumeros += numero * peso;
  somaPesos += peso;
  numero = parseFloat(prompt("Digite outro número decimal (ou 0 para sair): "));
  if (numero !== 0) {
    peso = parseFloat(
      prompt("Digite o peso correspondente ao número digitado: ")
    );
  }
}

if (somaPesos !== 0) {
  let mediaPonderada = somaNumeros / somaPesos;
  console.log(
    `A média ponderada dos números digitados é: ${mediaPonderada.toFixed(2)}`
  );
} else {
  console.log("Nenhum número foi digitado.");
}
