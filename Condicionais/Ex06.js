//Dia da semana por número(Switch case)

var prompt = require('prompt-sync')
let Dia = Number(prompt("Qual o Dia da semana"));



    switch (Dia) {
    case 1:
            console.log("Domingo")
    break;
    case 2:
            console.log("Segunda")
    break;
    case 3:
            console.log("Terca")
    break;
    case 4:
            console.log("Quarta")
    break;
    case 5:
            console.log("Quinta")
    break;
    case 6:
            console.log("Sexta")
    break;
    case 7:
            console.log("Sabado")
    break;
    
        default:
            break;
    }