print("Calculadora de acréscimo de salário")

def coleta_salario():
    while True:
        salario_ = float(input("Digite o seu salário: "))
        if salario_ >= 0:
            break
        else:
            print("Dado inválido inserido, insira um valor maior ou igual a zero")
    return salario_

def acrescimo(salario_,acrescimo):
    return salario_*acrescimo

salario = coleta_salario()
if salario <= 1500:
    novosalario = acrescimo(salario,1.2)
elif 2500>salario>1500:
    novosalario = acrescimo(salario,1.1)
else:
    novosalario = acrescimo(salario,1.05)

aumento = str(novosalario - salario)
novosalario = str(novosalario)
print("Seu salário após o aumento é de R$"+novosalario)
print("Aumento de R$"+aumento)