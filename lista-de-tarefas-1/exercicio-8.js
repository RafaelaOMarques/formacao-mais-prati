const prompt = require("prompt-sync")();

let valorA = prompt("Informe 1 número: ");
let valorB = prompt("Informe outro número diferente do primeiro: ");

while (valorA == valorB) {
  valorB = prompt(
    "Os dois numeros informados são iguais, gentileza informa outro numero: "
  );
}

if (valorA > valorB) {
  console.log(
    `Os numeros informados em ordem crescente foram: ${valorB}, ${valorA}`
  );
} else {
  console.log(
    `Os numeros informados em ordem crescente foram: ${valorA}, ${valorB}`
  );
}
