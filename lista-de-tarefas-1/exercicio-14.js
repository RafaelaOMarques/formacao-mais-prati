const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;
let numero = parseFloat(prompt("Informe um número decimal (ou 0 para sair): "));

while (numero !== 0) {
  soma += numero;
  contador++;
  numero = parseFloat(
    prompt("Informe outro número decimal (ou 0 para sair): ")
  );
}

if (contador !== 0) {
  let media = soma / contador;
  console.log(`A média dos números digitados é: ${media.toFixed(2)}`);
} else {
  console.log("Nenhum número foi digitado.");
}
