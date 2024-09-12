//mostra todas as posições acima da diagonal principal
const dim = 4;
for (let i = 1; i <= dim-1; i++){
    for (let j = i + 1; j <= dim; j++){
        console.log(i,j);
    };
};