"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, idade, hobbies) {
        this.nome = nome;
        this.idade = idade;
        this.hobbies = hobbies;
    }
}
exports.default = Pessoa;
const pessoa1 = new Pessoa('pessoa1', 20, ['programar', 'assistir TV']);
