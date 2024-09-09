//Eric Menegon, João Souza Silva

const Queue = require('./fila');
const Stack = require('../aula ago-26/stack-array');

const fila = new Queue();

fila.enqueue('pessoa 1');
fila.enqueue('pessoa 2');
fila.enqueue('pessoa 3');

function inverterFila(fila){
    const pilha = new Stack();
    let aux = undefined;
    for (let i = fila.size()-1; i >= 0; i--){
        aux = fila.items[i];
        pilha.push(aux);
    }
    fila.clear();
    for (let i = 0; i <= pilha.size() + 1; i++){
        fila.enqueue(pilha.pop());
    }
    return fila;
};

inverterFila(fila);