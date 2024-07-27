const prompt = require("prompt-sync")();

let numeroSorteado = Math.floor(Math.random() * 5) + 1;
let numeroEscolhido = parseInt(prompt("Qual o número sorteado (entre 1 e 5)?"));
let tentativas = 1;

while (numeroSorteado != numeroEscolhido) {
  console.log("Ainda nao acertou...tente novamente");
  numeroEscolhido = parseInt(prompt("Qual o número sorteado (entre 1 e 5)? "));
  tentativas++;
}

console.log(
  `Parabéns, você acertou o número sorteado foi ${numeroSorteado} em ${tentativas} tentativa(s).`
);
