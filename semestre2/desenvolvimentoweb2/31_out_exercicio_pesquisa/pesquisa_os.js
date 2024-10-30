"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let totalVotos = 0;
let votosWin = 0;
let votosUn = 0;
let votosLin = 0;
let votosNet = 0;
let votosMac = 0;
let votosOutro = 0;
let resultados = [votosWin, votosUn, votosLin, votosNet, votosMac, votosOutro];
let os = ["Windows", "Unix", "Linux", "Netware", "Mac OS", "Outro"];
let running = true;
while (running) {
    let escolha = Number(prompt(`
    1 - Windows Server
    2 - Unix
    3 - Linux
    4 - Netware
    5 - Mac OS
    6 - Outro

    Digite o número correspondente ao seu voto:`));
    switch (escolha) {
        case 1:
            resultados[0]++;
            totalVotos++;
            break;
        case 2:
            resultados[1]++;
            totalVotos++;
            break;
        case 3:
            resultados[2]++;
            totalVotos++;
            break;
        case 4:
            resultados[3]++;
            totalVotos++;
            break;
        case 5:
            resultados[4]++;
            totalVotos++;
            break;
        case 6:
            resultados[5]++;
            totalVotos++;
            break;
        case 0:
            running = false;
            break;
    }
}
function calculoPorcentagem(valor) {
    return (valor * 100) / totalVotos;
}
let porcentagens = [];
resultados.forEach((x) => {
    let porcentagemItem = calculoPorcentagem(x);
    porcentagens.push(porcentagemItem);
});
function retornaVencedor(resultados) {
    let maior = 0;
    let indice = 0;
    resultados.forEach((x, i) => {
        if (x > maior) {
            maior = x;
            indice = i;
        }
    });
    if (maior == 0) {
        return -1;
    }
    return indice;
}
console.log(`
Sistema Operacional     Votos   %
-----------------------------------
Windows Server          ${resultados[0]}    ${porcentagens[0]}
Unix                    ${resultados[1]}    ${porcentagens[1]}
Linux                   ${resultados[2]}    ${porcentagens[2]}
Netware                 ${resultados[3]}    ${porcentagens[3]}
Mac OS                  ${resultados[4]}    ${porcentagens[4]}
Outro                   ${resultados[5]}    ${porcentagens[5]}
-----------------------------------
Total                   ${totalVotos}       100%`);
if (retornaVencedor(resultados) != -1) {
    console.log(`O Sistema Operacional mais votado foi ${os[retornaVencedor(resultados)]}, com ${resultados[retornaVencedor(resultados)]}% dos votos.`);
}
else {
    console.log("Digite algum valor válido");
}
