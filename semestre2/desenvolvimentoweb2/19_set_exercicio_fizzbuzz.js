function divCinco(x){
    if (x%5 != 0){
        return false
    }
    return true
}

function divTres(y){
    if (y%3 != 0){
        return false
    }
    return true
}

function fizzbuzz(n){
    for (let i = 1; i<=n; i++){
        if (divTres(i) == true && divCinco(i) == true){
            console.log('Fizzbuzz')
            continue
        } else if (divTres(i) == true){
            console.log('Fizz')
            continue
        } else if (divCinco(i) == true){
            console.log('Buzz')
            continue
        } else{
            console.log(i)
        }
    }
}