const prompt = require("prompt-sync")();
let funcionário = {
  nome: "Rafaela",
  cargo: "estagiária",
  salario: 1000.0,
};

console.log(funcionário);
console.log(
  `O nome do funcionario é ${funcionário.nome}, o cargo é ${
    funcionário.cargo
  } e o salario de R$${funcionário.salario.toFixed(2)}`
);
