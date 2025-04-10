//Verificar se um aluno foi aprovado

var prompt = require('prompt-sync')();
let Nota = Number(prompt("Qual a nota: "));

if ( Nota >= 6) {
    console.log("Parabens voce passou de ano :)")
}else{
    console.log("REPROVADO :(")
}