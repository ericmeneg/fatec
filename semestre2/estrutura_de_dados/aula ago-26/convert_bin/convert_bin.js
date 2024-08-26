import PromptSync from "prompt-sync"
const input = PromptSync()
class Stack {
    constructor(){
        this.items = []
    }
    access(){
        return this.items
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    clear(){
        this.items = []
    }
}

function convertBinary(dec){
    let stack = new Stack
    while(true){
        stack.push(dec % 2)
        dec = Math.floor(dec/2)
        if (dec == 0){
            break
        }
    }
    let bin = new Stack
    while(true){
        bin.push(stack.pop())
        if (stack.isEmpty() == true){
            break
        }
    }
    return bin
}
let num = input('Digite o número a ser convertido: ')
console.log(`${num} em binário é representado como ${convertBinary(num).access().join('')}`)