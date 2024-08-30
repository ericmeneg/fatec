function sacar(valor){
    if ( valor%10 != 0 ){
      return 'impossível sacar'
    }
    cem = math.floor(valor/100)
    valor = valor%100
    cinquenta = math.floor(valor/50)
    valor = valor%50
    dez = math.floor(valor/10)
    valor = valor%10
  }