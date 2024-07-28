function gerarFibonacci(n) {
  let fibonacci = [1, 1];

  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return fibonacci;
}

const numElementos = 15;
const sequenciaFibonacci = gerarFibonacci(numElementos);

console.log(
  `Os ${numElementos} primeiros elementos da sequência de Fibonacci são:`
);
console.log(sequenciaFibonacci.join(", "));

