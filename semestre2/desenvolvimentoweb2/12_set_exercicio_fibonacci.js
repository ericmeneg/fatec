import PromptSync from "prompt-sync"
const Prompt = PromptSync()

let num = Number(Prompt("Digite a posição da sequência de Fibonacci a ser lida: "))

let flag = false;
switch (num){
    case 0: console.log("Digite um número maior que 0");
    case 1: console.log("0"); flag = true;
    case 2: console.log("1"); flag = true;
};

let pos1 = 0
let pos2 = 1
let pos3 = null
if (flag == false){
    for (let i = 3; i <= num; i++){
        pos3 = pos1+pos2
        pos1 = pos2
        pos2 = pos3
    };

    console.log(`O número na posição ${num} é: ${pos3}`);
};