const prompt = require("prompt-sync")();

let ladoA = parseFloat(prompt("Digite o valor do lado A:"));
let ladoB = parseFloat(prompt("Digite o valor do lado B:"));
let ladoC = parseFloat(prompt("Digite o valor do lado C:"));

let tipoTriangulo = verificarTriangulo(ladoA, ladoB, ladoC);
console.log(tipoTriangulo);

function verificarTriangulo(A, B, C) {
  if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
      return "Triângulo equilátero";
    } else if (A === B || A === C || B === C) {
      return "Triângulo isósceles";
    } else {
      return "Triângulo escaleno";
    }
  } else {
    return "Os lados fornecidos não formam um triângulo";
  }
}
