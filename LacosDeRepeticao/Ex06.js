//Solicitar idade até uma válida (&gt;= 0) (Use o do...While)

var prompt = require('prompt-sync')();

let idade = 0;

do {

    idade = prompt("Digite a Idade: ");   
    
} while (idade <= 0);

console.log("Sua idade e valida");
