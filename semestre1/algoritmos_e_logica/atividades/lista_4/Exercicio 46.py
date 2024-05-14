valor = float(input("Digite um valor: "))

def modulo(x):
    if x<0:
        mod = x * -1
    else:
        mod = x
    return mod

def dif(x,y):
    dif = x-y
    if dif < 0:
        dif = dif * -1
    return dif

def div(divisor,dividendo):
    div = divisor/dividendo
    return div

print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
if valor<0:
    print("O módulo do valor inserido é:",modulo(valor))
if valor>10:
    valor2 = float(input("Digite um segundo valor:"))
    print("A diferença entre os valores inseridos é %.2f" %dif(valor,valor2))
else:
    print("O valor da divisão do número dado por 5 é: ",(div(valor,5)))
    