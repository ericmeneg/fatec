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

    insert(element,position){

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

    }

    indexOf(element){

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

    }
}

class Node{
    constructor(element){
        this.element = element
        this.next = undefined
    }
}

let listaLigada = new LinkedList()
listaLigada.push('elemento 1')
listaLigada.push('elemento 2')
listaLigada.push('elemento 3')
listaLigada.push('elemento 4')
console.log(listaLigada.removeAt(1))
console.log(listaLigada)