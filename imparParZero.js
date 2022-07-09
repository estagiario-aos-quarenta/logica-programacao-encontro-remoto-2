//Programa imparParZero.js

// Declarações
const ler = require('readline-sync');
let alunosPresentes;
let numero;

// Início do programa
alunosPresentes = ler.questionInt('Infor a quantidade de alunos presentes na sala de aula: ');

for (numero = 0; numero <= alunosPresentes; numero ++) {
    if (numero == 0) {
        console.log('zero ' + numero);
    } else if (numero % 2 == 0) {
        console.log('par ' + numero);
    } else {
        console.log('ímpar' + numero);
    }
}

// Fim do programa 
