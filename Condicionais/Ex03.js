//Verificar se um número é par ou ímpar

var prompt = require('prompt-sync')();
let x = Number(prompt("Qual o numero: "));

if ( x %2== 0 ) {
    console.log("O seu nome e par ;)")
} else 
{
    console.log("Seu numero e impar ;)")
}