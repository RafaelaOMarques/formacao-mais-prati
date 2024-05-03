const prompt = require("prompt-sync")();

let quantidadeComprada = prompt("Informe quantas maçãs você comprou: ");

if (quantidadeComprada <= 11) {
  valorTotal = quantidadeComprada * 0.3;
} else {
  valorTotal = quantidadeComprada * 0.25;
}

console.log(`O valor total da compra é de R$${valorTotal}`);
