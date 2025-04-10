//Verificar se um número é positivo, negativo ou zero.
var prompt = require('prompt-sync')();
let Numero = Number(prompt("Qual o numero: "));

if (Numero > 0 ) {
    console.log(" passou ;)")
}else if (Numero >= 0){
    console.log("E igual a zero :)")
} else {
    console.log("E menor que zero :)")
}
