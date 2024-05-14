def coleta_valor():
    while True:
        valortotal_ = float(input("Digite o valor da compra (use . no lugar de ,): "))
        if valortotal_ >= 0:
            break
        else:
            print("Dado inválido inserido, insira um valor maior ou igual a zero")
    return valortotal_

def verif_intervalo(chao,teto,x):
    if x>=chao and x<teto:
        return True
    else:
        return False
    
while True:
    print("Ferramenta de cálculo de desconto da loja ABC")
    valortotal = coleta_valor()
    if verif_intervalo(0,199.99,valortotal) == True:
        valordescontado = valortotal * 0.95
    elif verif_intervalo(200,299.99,valortotal) == True:
        valordescontado = valortotal * 0.9
    else:
        valordescontado = valortotal * 0.8

    print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")

    print("Valor total:",valortotal)
    print("Valor com desconto:",valordescontado)

    escolha = input("Gostaria de consultar outra compra? Digite S para sim ou N para não: ").upper()
    if escolha == "N":
        break