var myVariable = 'global';
var myOtherVariable = 'global';
function myFunction() {
    var myVariable = 'local';
    return myVariable;
}
function myOtherFunction() {
    myOtherVariable = 'local'; // porque não usamos var, essa função atualiza a variável declarada na linha 2
    return myOtherVariable;
}
console.log('myVariable: ' + myVariable);
console.log('myFunction: ' + myFunction());
console.log('myOtherVariable: ' + myOtherVariable);
console.log('myOtherFunction: ' + myOtherFunction());
console.log('myOtherVariable: ' + myOtherVariable);