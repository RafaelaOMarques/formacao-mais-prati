const prompt = require("prompt-sync")();

let totalEleitores = parseInt(prompt("Informe o numero total de eleitores: "));

let votosTotais = prompt(
  "Informe o número de votos brancos, nulos e válidos (separe por uma vírgula): "
)
  .split(",")
  .map((voto) => parseInt(voto));

let votos = votosTotais;
let votosBrancos = ((votosTotais[0] / totalEleitores) * 100).toFixed(2);
let votosNulos = ((votosTotais[1] / totalEleitores) * 100).toFixed(2);
let votosValidos = ((votosTotais[2] / totalEleitores) * 100).toFixed(2);
console.log(
  `O percentual de votos por tipo é de: brancos ${votosBrancos}%, nulos ${votosNulos}% e validos ${votosValidos}%`
);
