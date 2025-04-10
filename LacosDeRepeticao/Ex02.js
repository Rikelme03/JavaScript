//Somar números até que o usuário digite 0(Use o While)
var prompt = require('prompt-sync')();

let Num = Number(prompt("Qual o numero: "));
let soma = 0;

while (Num !== 0) {
    
    soma += Num;
    Num =  Number(prompt("Qual o numero:"));   
}

console.log(soma);
