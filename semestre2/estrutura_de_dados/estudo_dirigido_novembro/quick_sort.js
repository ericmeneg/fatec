function quickSort(lista, left, right) {
    let index
    if (lista.length > 1) {
        index = partition(lista, left, right)
        if (left < index - 1) {
            quickSort(lista, left, index - 1)
        }
        if (index < right) {
            quickSort(lista, index, right)
        }
    }
    return lista
}

function partition(array, left, right) {
    const pivot = array[Math.floor((right + left) / 2)]
    let i = left
    let j = right
    while (i <= j) {
        while (array[i] < pivot) {
            i++
        }

        while (array[j] > pivot) {
            j--
        }

        if (i <= j) {
            swap(array, i, j)
            i++
            j--
        }
    }

    return i
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const listaAlunos = [
	"LEONARDO VINÍCIUS G. HUBERT",
	"WILLIAM SILVA DOS REIS",
	"JOAO VITOR F. M. ROCHA",
	"CAIO HENRIQUE F. DE SOUZA",
	"ERIC VINICIUS DA S. MENEGON",
	"DANIEL GALVAO M. DA SILVA",
	"GIOVANI DE BIAGI ALVES",
	"VITOR CARDOSO DA CRUZ",
	"GUSTAVO SILVA DE CARVALHO",
	"HOSANA AZEVEDO PIRES",
	"NATHAN FERRACINI BATISTA",
	"JOAO PEDRO SOUZA SILVA",
	"DANIEL BRITO DA SILVA JUNIOR",
	"ARTHUR DAVI GOMES",
	"ROBSON ALAN MANTOVANI",
	"MARCELO HENRIQUE REDUZINO",
	"ADRIANO DOS SANTOS",
	"MATHEUS HENRIQUE A. V. NEVES",
	"PEDRO HENRIQUE B. SANTOS",
	"RAMON GODINHO",
	"GRAZIELLA SOUZA",
	"RODRIGO MORAES DE S. GARCIA",
	"BRUNO HENRIQUE Q. GARCIA"
	]

console.log(quickSort(listaAlunos, 0, listaAlunos.length - 1))

export {quickSort, partition, swap, listaAlunos}