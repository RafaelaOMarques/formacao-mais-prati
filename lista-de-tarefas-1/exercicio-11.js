const prompt = require("prompt-sync")();

while (true) {
  let valor = parseInt(
    prompt("Digite um valor inteiro (digite 0 para sair): ")
  );

  if (valor <= 0) {
    console.log("Programa encerrado.");
    break;
  } else if (valor % 2 === 0) {
    console.log(`${valor} é PAR.`);
  } else {
    console.log(`${valor} é ÍMPAR.`);
  }
}
