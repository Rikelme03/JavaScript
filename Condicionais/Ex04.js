//Verificar se uma senha digitada está correta

const Senha = 123;

var prompt = require('prompt-sync')();
let y = Number(prompt("Qual a senha: "));

if ( Senha == y ) {
    console.log("A senha esta correta, Bem-Vindo ;)")
} else{
    console.log("Senha incoreta :(")
}