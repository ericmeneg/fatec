print("Calculadora de acréscimo de salário")
execucao = True
while execucao == True:
    salario = float(input("Digite o seu salário: "))
    print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
    if salario >= 0:
        execucao = False
    else:
        print("Salário inválido digitado, digite um número maior que 0.")
if salario <= 1500:
    novosalario = salario * 1.2
elif 2500>salario>1500:
    novosalario = salario * 1.1
else:
    novosalario = salario * 1.05
aumento = str(novosalario - salario)
print("Aumento de R$"+aumento)