#ht = hora trabalhada
#vh = valor da hora trabalhada
#considerando acréscimo de 50% por hora extra

def calcular_pagamento(ht,vh):
    if ht <= 40:
        salario_ = ht*vh
    else:
        salario_ = (40*vh)+(ht-40)*(vh*1.5)
    return salario_

valor_hora = int(input("Digite o valor a ser pago por hora de trabalho (em R$/h): "))
hora_trabalhada = int(input("Digite o número inteiro de horas trabalhadas no último mês: "))
salario = calcular_pagamento(hora_trabalhada,valor_hora)
print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
print("O valor a ser pago para este mês é R$"+str(salario))