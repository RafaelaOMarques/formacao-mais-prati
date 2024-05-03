const prompt = require("prompt-sync")();

let tempCelsius = parseInt(prompt("Informe a temperatura em graus Celsius: "));

let tempFahrenheit = tempCelsius * 1.8 + 32;

console.log(
  `A temperatura convertida de Celsius para Fahrenheit é de ${tempFahrenheit}`
);
