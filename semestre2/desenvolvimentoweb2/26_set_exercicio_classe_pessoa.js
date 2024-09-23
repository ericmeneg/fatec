class Pessoa{
    constructor(nome,idade,email){
      this.nome = nome
      this.idade = idade
      this.email = email
    }
  
    apresentar(){
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu email é ${this.email}`)
    }
}

let pessoa = new Pessoa('Eric',20,'eric.email@email.com')
pessoa.apresentar()
console.log(pessoa.nome)