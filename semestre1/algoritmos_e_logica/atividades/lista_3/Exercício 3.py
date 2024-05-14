print("Ferramenta de cálculo de média")
nome = input("Digite o seu nome:")
ra = input("Digite o seu RA: ")
execucao = True
while execucao == True:
    n1 = float(input("Digite a sua nota da prova 1: "))
    n2 = float(input("Digite a sua nota da prova 2: "))
    print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
    mg = (n1+n2)/2
    if mg >= 7:
        print("Sua média foi:",mg)
        print("Parabéns, você está aprovado!")
        execucao = False
    elif mg < 7 and n1 >= 0 and n2 >= 0:
        print("Sua média foi:",mg)
        print("A média foi insuficiente")
        testene = True
        while testene == True:
            ne = float(input("Digite a sua nota no exame:"))
            mf = (mg+ne)/2
            if mf >= 5:
                print("Parabéns, você aproveitou a sua chance! Está aprovado.")
                testene = False
            elif mf <5 and ne>=0:
                print("Estude mais para a próxima. Você não alcançou o mínimo necessário.")
                testene = False
            else:
                print("Dado inválido inserido para nota do exame, tente um valor maior ou igual a zero.")
        execucao = False
    else:
        print("Número inválido digitado, verifique os dados e tente novamente")   