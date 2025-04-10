//Verificar se o usuário pode tirar carteira de motorista

var prompt = require('prompt-sync')();
let idade = Number(prompt("Quantos Anos voce tem: "));

if (idade >= 18) {
    console.log("Parabens voce pode tirar a Habilitacao ;)")

}else{
    console.log("Voce nao pode tirar a habilitacao :(")
}