class Deck {
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    };
    size(){
        return this.count - this.lowestCount;
    };
    isEmpty(){
        return this.size() === 0;
    };
    //eu não achei esse no livro
    addBack(element){
        this.items[this.count] = element;
        this.count++;
    };
    addFront(element){
        if (this.isEmpty()){
            this.addBack(element);
        } else{
            if (this.lowestCount > 0){
                this.lowestCount--;
                this.items[this.lowestCount] = element;
            } else{
                for (let i = this.count; i > 0; i--){
                    this.items[i] = this.items[i-1];
                };
                count ++;
                this.lowestCount = 0;
            };
        };
    };
    removeBack(){
        if(this.isEmpty()){
            return undefined
        }
        const result = this.items[this.count-1]
        delete this.items[this.count-1]
        this.count--
        return result
    }
    removeFront(){
        if (this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    peekFront(){
        if (this.isEmpty()){
            return undefined;
        };
        return this.items[this.lowestCount];
    };
    //Método peekBack() foi feito por mim, não sei se tá certo
    peekBack(){
        if (this.isEmpty()){
            return undefined
        }
        return this.items[this.count];
    }
    clear(){
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    };
    toString(){
        if (this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        };
        return objString;
    }
};

deque = new Deck()
deque.isEmpty()
deque.clear()
deque.removeBack()
deque.removeFront()
deque.size()
deque.peekFront()
deque.peekBack()
deque.toString()