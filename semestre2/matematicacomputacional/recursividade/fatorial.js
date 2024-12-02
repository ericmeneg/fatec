function fatorial(n){
    if (!Number.isInteger(n)) {
        return "O número deve ser inteiro"
    }
    if (n < 0){
        return "O número deve ser maior ou igual a zero"
    }
    if (n == 0 || n == 1) {
        return 1
    }
    return fatorial(n-1) * n
}

console.log(fatorial(1.1))