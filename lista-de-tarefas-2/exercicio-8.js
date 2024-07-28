const prompt = require("prompt-sync")();

let atividadesNivelA = 2;
let atividadesNivelB = 5;
let atividadesNivelC = 10;

let horasAtividades = parseInt(
  prompt("Quantas horas de atividades você praticou? ")
);

let pontosAcumulados;

let cashBack = 0.05;

if (horasAtividades <= 10) {
  pontosAcumulados = horasAtividades * atividadesNivelA;
} else if (horasAtividades > 10 && horasAtividades <= 20) {
  pontosAcumulados = horasAtividades * atividadesNivelB;
} else {
  pontosAcumulados = horasAtividades * atividadesNivelC;
}

console.log(
  `Você acumulou ${pontosAcumulados} pontos, e ganhou R$ ${
    cashBack * pontosAcumulados
  } reais`
);
