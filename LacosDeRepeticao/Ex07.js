//Mostrar tabuada de um número(Use o for)

var prompt = require('prompt-sync')();
let numero = Number(prompt("Qual o numero: "))

for (let i = 1; i <= 10; i++) {
    console.log(numero+" x "+(numero*i));
}
