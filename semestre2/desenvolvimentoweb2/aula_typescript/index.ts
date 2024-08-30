import PromptSync from 'prompt-sync'
const prompt = PromptSync()
function calcularArea(lado: number): number{
    return lado * lado
}

const numDigitado = Number(prompt('Digite um número: '))
const quadrado = calcularArea(numDigitado)
console.log(quadrado)


type situacao = 'aprovado' | 'reprovado'

interface Aluno {
    nome: string,
    mediaFinal: number,
    situacao: situacao,
}

const aluno: Aluno = {
    nome: "eric",
    mediaFinal: 9,
    situacao: "aprovado"
}

function alunoFactory(nome:string, mediaFinal: number): Aluno{
    let situacao: situacao = 'reprovado'
    if (mediaFinal >= 6){
        situacao = 'aprovado'
    } 
    return {
        nome,
        mediaFinal,
        situacao
    }
    
    /*
    esse return usa uma notação resumida, onde se o valor de uma chave é dado por uma variável
    com o mesmo nome da chave, basta escrever o nome da variável/chave seguido por uma virgula
    ex nesse caso: a linha "nome," tem o mesmo efeito de "nome: nome,"
    */
}

const aluno3 = alunoFactory('eric',9)
console.log(aluno3.situacao)