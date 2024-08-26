// Crie uma função em JavaScript que converta uma temperatura de Celsius para Fahrenheit. A função deve:
// Receber um parâmetro numérico representando a temperatura em Celsius Calcular a temperatura equivalente em Fahrenheit Retornar o resultado arredondado para uma casa decimal
// Lembre-se que a fórmula para converter Celsius para Fahrenheit é: F = (C * 9/5) + 32 

function convertTemp(tc){
    tf = (tc*(9/5))+32
    return tf
}

//demonstração:
console.log(convertTemp(232))