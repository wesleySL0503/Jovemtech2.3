const prompt = require('prompt-sync')();

for(let cont = 1; cont<=10; cont++){



let nome = prompt("Digite seu nome: " );


 let nota1 = parseInt(prompt("Informe sua primeira nota: ")); 
 let nota2 = parseInt(prompt("Informe sua segunda nota: ")); 
let nota3 = parseInt(prompt("Digite a terceira nota: "));
let nota4 = parseInt(prompt("Digite a quarta nota: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("------------------------");
console.log("ALUNO: " + nome);
console.log("MÉDIA: " + media);

if (media >= 6) {
    console.log("RESULTADO: Aprovado!");
} else if (media >= 5) {
    console.log("RESULTADO: Recuperação!");
} else {
    console.log("RESULTADO: Reprovado!");
}
}