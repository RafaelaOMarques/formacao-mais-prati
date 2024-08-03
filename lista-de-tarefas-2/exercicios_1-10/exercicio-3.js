const prompt = require("prompt-sync")();

let distanciaViagem = parseInt(
  prompt("Quantos kilometros são no percurso que irá realizar? ")
);

if (distanciaViagem <= 200) {
  console.log(
    `O valor da passagem será de R$${(distanciaViagem * 0.5).toFixed(2)} reais`
  );
} else {
  console.log(
    `O valor da passagem será de R$${(distanciaViagem * 0.45).toFixed(2)} reais`
  );
}
