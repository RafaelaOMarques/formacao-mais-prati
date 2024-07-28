const prompt = require("prompt-sync")();

let listaFuncionarios = [];

let totalFuncionarios = parseInt(
  prompt("Informe a quantidade de funcionarios: ")
);

while (totalFuncionarios != 0) {
  let salario = parseFloat(prompt("Informe o salario do funcionario: "));
  let sexo = prompt("Informe o sexo (F para feminino, e M para masculino): ");
  listaFuncionarios.push({ salario: salario, sexo: sexo });

  totalFuncionarios--;
}

let totalSalarioFeminino = 0;
let totalSalarioMasculino = 0;

listaFuncionarios.forEach((funcionario) => {
  if (funcionario.sexo === "F") {
    totalSalarioFeminino += funcionario.salario;
  } else if (funcionario.sexo === "M") {
    totalSalarioMasculino += funcionario.salario;
  }
});

console.log(
  `Da lista de funcionarios o total pago a homens R$ ${totalSalarioMasculino} e o total pago a mulheres R$ ${totalSalarioFeminino}`
);

console.log(listaFuncionarios);
