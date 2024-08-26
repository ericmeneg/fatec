class Stack {
    constructor(){
        this.items = []
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
    console.log(stack)
    console.log(stack.size())
    let bin = new Stack
    while(true){
        bin.push(stack.pop())
        if (stack.isEmpty() == true){
            break
        }
    }
    return bin
}

console.log(convertBinary(10))