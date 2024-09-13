export default class Pessoa{
    nome: string
    idade: number
    hobbies: string[]

    constructor(nome: string, idade: number, hobbies: string[]){
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies
    }
}

const pessoa1 = new Pessoa('pessoa1',20,['programar','assistir TV'])