//Colunas da matriz A, linhas da matriz A, colunas da matriz B, linhas da matriz B
const colA = 2
const linA = 3
const colB = 2
const linB = 2

//matriz resultante, matriz A e matriz B
//achar algum jeito de montar automaticamente a matriz mr contendo o número de
//linhas e colunas vazias adequado
let mr = [[null,null],[null,null],[null,null]]
let ma = [[2,3],[1,0][4,5]]
let mb = [[3,1],[2,4]]
if (colA == linB){
    for (let i = 1; i <= linA; i++){
        for (let j = 1; i <= colB; j++){
            // algo assim mr[i,j] = (ma[i,j]*mb[i,j])+(ma[i,j+1]*mb[i,j+1])
        }
    }
} else{
    console.log("Não é possível multiplicar as duas matrizes")
}
console.log(mr)