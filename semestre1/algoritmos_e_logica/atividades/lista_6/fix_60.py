while True:
    peso = float(input("Digite o peso: "))
    if peso < 0:
        print("Digite um valor maior que 0")
    else: 
        break
while True:
    sexo = input("Digite o sexo (m ou f): ").lower()
    if sexo != "f" and sexo != "m":
        print("Dado inválido digitado, digite F ou M")
    else: 
        break
while True:
    altura = float(input("Digite a sua altura: "))
    if altura < 0:
        print("Digite um valor maior que 0")
    else:
        break

print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024") 
r = peso/(altura**2)
print("Seu IMC é:",r)
if sexo == "f":
    if r>=24:
        print("Acima do peso")
    if r<19:
        print("Abaixo do peso")
    if 19<=r<24:
        print("Peso ideal")

if sexo == "m":
    if r>=25:
        print("Acima do peso")
    if r<20:
        print("Abaixo do peso")
    if 20<=r<25:
        print("Peso ideal")