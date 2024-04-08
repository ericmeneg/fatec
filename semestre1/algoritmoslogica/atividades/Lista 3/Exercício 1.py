valor = int(input("Digite um número inteiro: "))

print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
if valor == 1 or valor == 2 or valor == 3:
    valor = valor**2
    print("O valor do número digitado elevado ao quadrado é:",valor)
elif valor == 4 or valor == 9:
    valor = int(valor**(1/2))
    print("O valor da raiz quadrada do número digitado é:",valor)
elif valor == 6 or valor == 7 or valor == 8:
    valor = float(valor/9)
    print("O valor da divisão do número digitado por 9 é: %.2f" %valor)

