// função com return
function somar(a,b){
    const total = a + b
    return total
}

// função de return void
function imprimir(texto){
    console.log(texto)
}

const teste = somar(10,20)
imprimir(teste)

//teste de arrow function
function calcular(a,b,operacao){
    return operacao(a,b)
}

console.log(calcular(10,20,(a,b)=>{
    return a+b
}))