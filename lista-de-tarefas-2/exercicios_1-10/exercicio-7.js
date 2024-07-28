const prompt = require("prompt-sync")();

let carroPopular = 90.0;
let carroLuxo = 150.0;

let cemKmPopular = 0.2;
let acimaCemKmPopular = 0.1;
let cemKmLuxo = 0.3;
let acimaCemKmLuxo = 0.25;

let carroSelecionado = parseInt(
  prompt(
    "Qual o tipo do carro? Informe 1 para carro Popular e 2 para carro Luxo: "
  )
);

let kmPercorridos = parseInt(prompt("Quantos Km foram percorridos? "));
let diarias = parseInt(prompt("Quantas diárias? "));

if (carroSelecionado == 1 && kmPercorridos > 100) {
  console.log(`O Carro escolhido foi: Carro Popular`);
  console.log(`os custos são:`);
  console.log(`Para ${diarias} diárias R$ ${carroPopular * diarias} `);
  console.log(
    `Para ${kmPercorridos} kilometros pecorridos  R$ ${
      acimaCemKmPopular * kmPercorridos
    }`
  );
} else if (carroSelecionado == 1 && kmPercorridos <= 100) {
  console.log(`O Carro escolhido foi: Carro Popular`);
  console.log(`os custos são:`);
  console.log(`Para ${diarias} diárias R$ ${carroPopular * diarias} `);
  console.log(
    `Para ${kmPercorridos} kilometros pecorridos  R$ ${
      cemKmPopular * kmPercorridos
    }`
  );
} else if (carroSelecionado == 2 && kmPercorridos > 100) {
  console.log(`O Carro escolhido foi: Carro Luxo`);
  console.log(`os custos são:`);
  console.log(`Para ${diarias} diárias R$ ${carroLuxo * diarias} `);
  console.log(
    `Para ${kmPercorridos} kilometros pecorridos  R$ ${
      acimaCemKmLuxo * kmPercorridos
    }`
  );
} else if (carroSelecionado == 2 && kmPercorridos <= 100) {
  console.log(`O Carro escolhido foi: Carro Luxo`);
  console.log(`os custos são:`);
  console.log(`Para ${diarias} diárias R$ ${carroLuxo * diarias} `);
  console.log(
    `Para ${kmPercorridos} kilometros pecorridos  R$ ${
      cemKmLuxo * kmPercorridos
    }`
  );
}
