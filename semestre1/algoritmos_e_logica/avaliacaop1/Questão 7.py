nome = input("Digite o seu nome: ")
ra = input("Digite o seu RA: ")
tecladohabilitado = True
while tecladohabilitado == True:
    np1 = float(input('Digite a sua nota na prova 1 (use "." no lugar de ","): '))
    np2 = float(input('Digite a sua nota na prova 2 (use "." no lugar de ","): '))
    if np1>=0 and np1<=10 and np2>=0 and np2<=10:
        tecladohabilitado = False
    else:
        print("Dado(s) inválido(s) digitado(s), tente novamente")
mg = (np1*4+np2*6)/10
print("Eric Vinicius da Silva Menegon - RA: 1051392411019")
print("Sua média foi",mg)
if mg >= 9:
    conceito = "A"
    print("Conceito:",conceito)
    print("APROVADO")
elif mg<9 and mg>=7:
    conceito = "B"
    print("Conceito:",conceito)
    print("APROVADO")
elif mg<7 and mg>=3:
    conceito = "C"
    print("Conceito:",conceito)
    print("EXAME")
else:
    conceito = "D"
    print("Conceito:",conceito)
    print("DP")

    