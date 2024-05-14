def verif_idade(idade_):
    if idade_ > 65:
        return 1
    elif idade_ >= 18:
        return 2
    else:
        return 3
    
nome = input("Digite o seu nome: ")
idade = int(input("Digite a sua idade: "))

print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")

if verif_idade(idade) == 1:
    print("Bem vindo(a)",nome,"você é maior de 65 anos")
if verif_idade(idade) == 2:
    print("Bem vindo(a)",nome,"você é maior de idade")
if verif_idade(idade) == 3:
    print("Bem vindo(a)",nome,"você é menor de idade")
