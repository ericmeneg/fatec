valor = float(input("Digite um valor: "))
print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
if valor<0:
    valor = valor * -1
    print("O módulo do valor inserido é:",valor)
if valor>10:
    valor2 = float(input("Digite um segundo valor:"))
    diferenca = valor-valor2
    if diferenca < 0:
        diferenca = diferenca * -1
    print("A diferença entre os valores inseridos é %.2f" %diferenca)
else:
    print("O valor da divisão do número dado por 5 é: ",(valor/5))

    