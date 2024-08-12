var num = 1; // {1}
num = 3; // {2}
var price = 1.5; // {3}
var myName = "Packt"; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}

console.log('num: '+ num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue)
console.log('price: '+ price);
console.log('nullVar: '+ nullVar);
console.log('und: ' + und);

let alunos = [{
    "nome" : "eric",
    "idade" : 19,
    "curso" : "DSM",
},{
    "nome" : "daniel",
    "idade" : 18,
    "curso" : "DSM",
},{
    "nome" : "robson",
    "idade" : "sla",
    "curso" : "DSM",
}]

function printName(item){console.log(item.nome)}
function printAge(item){console.log(item.idade)}
function printCurso(item){console.log(item.curso)}
let exibicao = false
function teste(exibicao){
    if (exibicao = true){document.getElementById("gato").style = 'display: block;'}
}