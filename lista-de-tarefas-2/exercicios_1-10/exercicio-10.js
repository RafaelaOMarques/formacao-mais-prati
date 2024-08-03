const prompt = require("prompt-sync")();

let opcao = 1;

let listaNumeros = [];

while (opcao != 0) {
  let pergunteNumero = parseInt(prompt("Informe um numero inteiro: "));
  listaNumeros.push(pergunteNumero);
  opcao = parseInt(
    prompt("Digite 0 para sair ou qualquer outro número para continuar: "),
    10
  );
}

let soma = listaNumeros.reduce(
  (numero, numeroValue) => numero + numeroValue,
  0
);
let menorNumero = Math.min(...listaNumeros);
let media = soma / listaNumeros.length;
let maiorNumero = Math.max(...listaNumeros);

console.log(
  `O total da soma é ${soma}, o menor numero informado foi ${menorNumero}, o maior numero informado foi ${maiorNumero}  e a media dos numeros informados é ${media}`
);
