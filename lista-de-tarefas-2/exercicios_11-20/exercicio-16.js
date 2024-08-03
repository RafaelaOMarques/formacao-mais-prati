function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 100);
}
let vetor = [];
for (let i = 0; i < 20; i++) {
  vetor.push(gerarNumeroAleatorio());
}

console.log("Números gerados:", vetor);

vetor.sort((a, b) => a - b);

console.log("Números ordenados:", vetor);
