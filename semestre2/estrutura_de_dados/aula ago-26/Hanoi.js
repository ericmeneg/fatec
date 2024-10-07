//stack (pilha): last in first out, o elemento mais recente é o primeiro a ser removido
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }
}

let pilha1 = new Stack()
let pilha2 = new Stack()
let pilha3 = new Stack()
let aux // variável que armazena o valor de retorno do método stack.pop() temporariamente para inserção do valor em outra pilha

pilha1.push(3)
pilha1.push(2)
pilha1.push(1)

aux = pilha1.pop()
pilha3.push(aux)

aux = pilha1.pop()
pilha2.push(aux)

aux = pilha3.pop()
pilha2.push(aux)

aux = pilha1.pop()
pilha3.push(aux)

aux = pilha2.pop()
pilha1.push(aux)

aux = pilha2.pop()
pilha3.push(aux)

aux = pilha1.pop()
pilha3.push(aux)

console.log(`Torre 1: ${pilha1.items}`)
console.log(`Torre 2: ${pilha2.items}`)
console.log(`Torre 3: ${pilha3.items}`)