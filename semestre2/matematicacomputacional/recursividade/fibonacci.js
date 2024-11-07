function fibo(n){
    if (!Number.isInteger(n)) {
        return "O número deve ser inteiro"
    }
    if (n < 1){
        return "O número deve ser igual ou maior que 1"
    }
    if (n == 1 || n == 2){
        return 1
    }
    return fibo(n-2) + fibo(n-1)
}