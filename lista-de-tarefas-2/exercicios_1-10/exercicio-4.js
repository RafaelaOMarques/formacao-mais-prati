const prompt = require("prompt-sync")();

let retaA = parseInt(prompt("Informe o tamanho da primeira reta: "));
let retaB = parseInt(prompt("Informe o tamanho da segunda reta: "));
let retaC = parseInt(prompt("Informe o tamanho da terceira reta: "));

let somaRetasAB = retaA + retaB;
let somaRetasAC = retaA + retaC;
let somaRetasCB = retaC + retaB;

if (retaA < somaRetasCB && retaB < somaRetasAC && retaC < somaRetasAB) {
  console.log("Com essas retas é possivel formar um triângulo");
}
