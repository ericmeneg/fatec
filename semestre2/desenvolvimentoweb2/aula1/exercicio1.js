//type: commonjs
//const prompt = require("prompt-sync")()

//type: module
import PromptSync from "prompt-sync"
const prompt = PromptSync()
const valor = Number(prompt('Digite o saldo inicial: '))
const acrescimo = Number(prompt('Digite o acréscimo mensal (número entre 0 e 1): '))
let novoValor  = valor
let count = 0
while (novoValor < valor * 3) {
    novoValor = novoValor + novoValor * acrescimo
    count ++
    console.log(`Saldo: ${novoValor.toFixed(2)} - Mêses corridos: ${count}`)
}