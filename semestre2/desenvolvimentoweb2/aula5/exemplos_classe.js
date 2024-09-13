const pessoa1 = {
    nome: 'Eric',
    idade: 20,
    hobbies: ["jogar", "assistir tv", "programar"],
}

pessoa1.hobbies.push("outra atividade")
console.log(pessoa1)

function criarPessoa(nome,idade,hobbies){
    return{
        nome,
        idade,
        hobbies,
    }
}
let pessoa2 = criarPessoa('Pedro',21,['eu sla'])
pessoa2 = JSON.stringify(pessoa2)
console.log(pessoa2)
pessoa2 = JSON.parse(pessoa2)
console.log(pessoa2)

class Pessoa{
    constructor(nome,idade,hobbies){
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies
    }
    seApresentar(){
        console.log(`Olá! Meu nome é ${this.nome}!`)
    }
    anoNascimento(){
        return 2024 - this.idade
    }
}

const paula = new Pessoa('Paula',20,['jogar','assistir tv','programar'])
console.log(paula)
paula.apresentar()