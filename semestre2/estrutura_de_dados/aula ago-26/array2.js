let daysOfWeek = []
let diasDaSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

console.log(diasDaSemana.length)

for (let i = 0; i < diasDaSemana.length; i++) {
    console.log(diasDaSemana[i])
}

dicionario = {
    'Sun': 'Dom',
    'Mon': 'Seg',
    'Tue': 'Ter',
    'Wed': 'Qua',
    'Thu': 'Qui',
    'Fri': 'Sex',
    'Sat': 'Sab'
}

for (let i = 0; i < diasDaSemana.length; i++) {
    console.log(`Inglês: ${diasDaSemana[i]} // Português: ${dicionario[diasDaSemana[i]]}`)
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//adicionando um elemento ao fim da lista
numbers[numbers.length] = 10

//adicionando um ou mais elementos ao fim da lista com o método push
numbers.push(11,12)
console.log(numbers)

//método unshift (remove item de indíce mais elevado)
numbers.unshift(-1)
console.log(numbers)

//método shift (remove item de indíce 0)
numbers.shift()
console.log(numbers)

//método splice
let teste =['joao','pedro','paulo']
//inserindo na posição 3, eliminando 0 elementos, insira 2, 3 e 4
teste.splice(3,0,2,3,4)