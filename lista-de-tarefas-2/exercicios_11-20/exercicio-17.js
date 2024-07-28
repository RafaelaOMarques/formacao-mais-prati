const prompt = require("prompt-sync")();
let tabela = []
let totalPessoas = 0
let menoresIdade = []

while(totalPessoas < 9){
  const input = prompt('Informe o nome e idade separados por virgula: ')
  const [nome, idade] = input.split(',')
  tabela.push({ nome: nome.trim(), idade: parseInt(idade.trim(), 10) });
  totalPessoas++;
}

for (let pessoa of tabela) {
  if (pessoa.idade < 18) {
    menoresIdade.push(pessoa);
  }
}

console.log("Tabela de pessoas:", tabela);
console.log("Tabela de menores de idade:", menoresIdade);
