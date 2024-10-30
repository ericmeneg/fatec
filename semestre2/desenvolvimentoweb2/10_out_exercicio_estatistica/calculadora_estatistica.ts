function calcularMedia(dominio: number[]): number | undefined {

    if (dominio.length == 0) {
        return undefined
    }

    let total = 0
    let count = dominio.length

    dominio.forEach((x) => {
        total += x
    })

    return total / count

}

function calcularMediana(dominio: number[]): number | undefined {

    if (dominio.length == 0) {
        return undefined
    }

    //as subtrações por 1 servem para o uso posterior dos números como indíces do array dominio
    if (dominio.length % 2 == 0) {
        let meioMenor = (dominio.length / 2) - 1
        let meioMaior = meioMenor + 1
        return (dominio[meioMaior] + dominio[meioMenor]) / 2
    }

    let meio = Math.ceil(dominio.length / 2) - 1
    return dominio[meio]

}

function calcularModa(dominio: number[]): string | undefined {

    if (dominio.length == 0) {
        console.log('Não é possível realizar essa operação com conjuntos vazios')
        return undefined
    }

    let acumulador: { [key: string]: number } = {}
    dominio.forEach((x) => {
        let y = x.toString()
        if (acumulador[y]) {
            acumulador[y]++
        } else {
            acumulador[y] = 1
        }
    })

    let maxCount = 0
    let moda = []

    for (const i in acumulador) {
        if (acumulador[i] > maxCount) {
            maxCount = acumulador[i]
            moda.length = 0 //limpa o array de modas
            moda.push(i)
        } else if (acumulador[i] == maxCount) {
            moda.push(i)
        }
    }

    if (maxCount == 1) {
        return undefined
    }

    let string = ""
    moda.forEach((x) => {
        string = string + x + ', '
    })
    return string.slice(0, -2)
}

function calcularEstatisticas(dominio: number[]): undefined {
    
    if (dominio.length == 0){
        console.log('Não é possível realizar essas operações com conjuntos vazios')
        return undefined
    }

    console.log(`A média do conjunto dado é ${calcularMedia(dominio)}`)
    console.log(`A mediana do conjunto dado é ${calcularMediana(dominio)}`)

    if (calcularModa(dominio)) {
        console.log(`A(s) moda(s) da função são: ${calcularModa(dominio)}`)
    } else{
        console.log(console.log('Não é possível determinar a moda de um conjunto composto inteiramente de itens únicos.'))
    }
}

let teste = [1, 5, 8, 8, 9, 10, 10, 10, 8]

calcularEstatisticas(teste)