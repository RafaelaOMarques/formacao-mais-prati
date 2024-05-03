const prompt = require("prompt-sync")();

let codigoOrigem = parseInt(prompt("Informe o código origem do produto: "));

switch (true) {
  case 1:
    console.log("Sul");
    break;
  case 2:
    console.log("Norte");
    break;
  case 3:
    console.log("Leste");
    break;
  case 4:
    console.log("Oeste");
    break;
  case 5 || 6:
    console.log("Nordeste");
    break;
  case 7 || 8 || 9:
    console.log("Sudeste");
    break;
  case codigoOrigem >= 10 && codigoOrigem < 21:
    console.log("Centro-Oeste");
    break;
  case codigoOrigem >= 25 && codigoOrigem < 51:
    console.log("Nordeste");
    break;
  default:
    console.log("O número informado não possue a origem no Brasil");
}
