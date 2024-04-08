sexo = input("Digite o seu sexo, M para masculino ou F para feminino: ")
h = float(input("Digite a sua altura em metros (use . no lugar de ,): "))

pim = (72.7*h)-58
pif = (62.1*h)-44.7

print("Nome: Eric Vinicius da Silva Menegon RA: 1051392411019 Turma: DSM 2024")
if sexo != "M" and sexo != "m" and sexo != "F" and sexo != "f":
    print("Dado inválido digitado")
elif h<0:
    print("Dado inválido digitado")
elif sexo == "M" or sexo == "m":
    print("Seu peso ideal é %.2f" %pim)
elif sexo == "F" or sexo == "f":
    print("Seu peso ideal é %.2f" %pif)

