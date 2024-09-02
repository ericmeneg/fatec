"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function calcularArea(lado) {
    return lado * lado;
}
const numDigitado = Number(prompt('Digite um número: '));
const quadrado = calcularArea(numDigitado);
console.log(quadrado);
const aluno = {
    nome: "eric",
    mediaFinal: 9,
    situacao: "aprovado"
};
function alunoFactory(nome, mediaFinal) {
    let situacao = 'reprovado';
    if (mediaFinal >= 6) {
        situacao = 'aprovado';
    }
    return {
        nome,
        mediaFinal,
        situacao
    };
    /*
    esse return usa uma notação resumida, onde se o valor de uma chave é dado por uma variável
    com o mesmo nome da chave, basta escrever o nome da variável/chave seguido por uma virgula
    ex nesse caso: a linha "nome," tem o mesmo efeito de "nome: nome,"
    */
}
const aluno3 = alunoFactory('eric', 9);
console.log(aluno3.situacao);
