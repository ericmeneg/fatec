valor = float(input("Digite um valor: "))

def pot(x,y):
    pot = x**y
    return pot

def fat(x):  
    contagem = 1
    fat = x
    while contagem<x:
        fat = fat*(x-contagem)
        contagem += 1
    return fat

def div(divisor,dividendo):
    div = divisor/dividendo
    return div

print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
if valor == 1 or valor == 2:
    print("O valor do número digitado ao cubo é:",pot(valor,3))
elif (valor % 3) == 0 and valor>=0:
    print("O fatorial do valor inserido é: ",fat(valor))
elif valor == 4 or valor == 5 or valor == 7 or valor == 8:
    print("O valor da divisão do número dado por 9 é: ",(div(valor,9)))
else:
    print("Valor inválido")