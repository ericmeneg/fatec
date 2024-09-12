//mostra todas as posições abaixo da diagonal principal
const dim = 4;
for (let i = dim; i >= 2; i--){
    for (let j = i - 1; j>= 1; j--){
        console.log(i,j)
    }
}