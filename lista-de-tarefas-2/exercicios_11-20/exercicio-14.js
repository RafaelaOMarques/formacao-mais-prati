const prompt = require("prompt-sync")();
let elementos = 0;
let nomesInformados = [];
while (elementos < 7) {
  let nome = prompt("Informe um nome: ");
  nomesInformados.push(nome);
  elementos++;
}

console.log(`O nomes informados foram: ${nomesInformados.join(", ")}`);
console.log(
  `Os nomes informados em ordem inversa são: ${nomesInformados.reverse()}`
);
