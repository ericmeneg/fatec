import PromptSync from "prompt-sync";
const prompt = PromptSync()
let numero = undefined
function somenteDigitos(str){
    return /^\d+$/.test(str)
}

while (true){
    numero = prompt("Digite o número cuja tabuada você gostaria de ver: ")
    if (somenteDigitos(numero)){
        break
    } else {
        console.log('Digite um número válido')
    }
}

numero = Number(numero)
for (let i=1; i <= 10; i++){
    let resultado = i * numero
    console.log(`${i}x${numero}=${resultado}`)
}