class LinkedList {
    constructor() {
        this.count = 0
        this.head = undefined
    }

    equalsfn(a,b){ //compara dois elementos fornecidos como parâmetros
        return a===b
    }

    push(element){ //insere elemento no final da lista
        const node = new Node(element)
        let current
        if (this.head == null){
            this.head = node
        } else{
            current = this.head
            while (current.next != null){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    sortInsert(element){
        const newNode = new Node(element)
        
        if (this.head == null){
            this.head = newNode
            this.count++
            return true
        }

        if (element <= this.head.element){
            newNode.next = this.head
            this.head = newNode
            this.count++
            return true
        }

        let current = this.head

        while (current.next !== undefined && current.next.element < element){
            current = current.next
        }

        newNode.next = current.next
        current.next = newNode
        this.count++

        return true
    }

    insert(element,index){
        if (index >= 0 && index <= this.count){
            const node = new Node(element)
            if (index === 0){
                const current = this.head
                node.next = current
                this.head = node 
            } else {
                const previous = this.getElementAt(index-1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }

    getElementAt(index){
        if (index >= 0 && index <= this.count){
            let node = this.head
            for (let i = 0; (i < index) && (node != null); i++){
                node = node.next
            }
            return node
        }
        return undefined
    }

    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    indexOf(element){
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++){
            if (this.equalsfn(element, current.element)){
                return i
            }
            current = current.next
        }
        return -1
    }
    
    removeAt(index){
        if (index >= 0 && index < this.count){
            let current = this.head
            if (index === 0){
                this.head = current.next
            } else {
                let previous
                for (let i = 0; i < index; i++){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }

    isEmpty(){
        return this.count === 0
    }

    size(){
        return this.count
    }

    toString(){
        if (this.head == null){
            return ''
        }
        let objString =  `${this.head.element}`
        let current = this.head.next
        for (let i = 1; i < this.size() && current != null; i++){
            objString = `${objString}, ${current.element}`
            current = current.next
        }
        return objString
    }

    clear(){
        this.head = undefined
        this.count = 0
    }
}

class Node{
    constructor(element){
        this.element = element
        this.next = undefined
    }
}

let listaOrdenada = new LinkedList()
let listaAlunos = [
'ARTHUR DAVI GOMES',
'BRUNO HENRIQUE QUERICHELLI GARCIA',
'CAIO HENRIQUE FERREIRA DE SOUZA',
'DANIEL BRITO DA SILVA JUNIOR',
'DANIEL GALVAO MAGALHAES DA SILVA',
'DAVI BERTO MANSUR DUARTE',
'ELISA APARECIDA MARTINS DE OLIVEIRA',
'ERIC VINICIUS DA SILVA MENEGON',
'FELIPE AUGUSTO PEREIRA LEMES',
'FERNANDA VICTORIA FELIX OLIVEIRA',
'ADRIANO DOS SANTOS',
'GIOVANI DE BIAGI ALVES',
'VITOR CARDOSO DA CRUZ',
'GRAZIELLA SOUZA',
'RODRIGO MORAES DE SOUZA GARCIA',
'HOSANA AZEVEDO PIRES',
'JOAO PEDRO SOUZA SILVA',
'LEONARDO VINÍCIUS GURTLER HUBERT',
'MARCELO HENRIQUE REDUZINO',
'WILLIAM SILVA DOS REIS',
'NATHAN FERRACINI BATISTA',
'GUSTAVO SILVA DE CARVALHO',
'PEDRO HENRIQUE BONOMO SANTOS',
'RAMON GODINHO',
'JOAO VITOR FERNANDES DE MATOS ROCHA',
'MATHEUS HENRIQUE ALMEIDA VIEIRA NEVES',
'ROBSON ALAN MANTOVANI'
]

listaAlunos.forEach((x)=>{
    listaOrdenada.sortInsert(x)
})

console.log(listaOrdenada.toString())