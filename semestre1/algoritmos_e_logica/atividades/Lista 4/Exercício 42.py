print("Ferramenta de cálculo de média")
nome = input("Digite o seu nome:")
ra = input("Digite o seu RA: ")

def calculo_media(n1_,n2_):
    mg_ = (n1_+n2_)/2
    return mg_

def coleta_notas():
    while True:
        n1_ = float(input("Digite a sua nota da prova 1: "))
        n2_ = float(input("Digite a sua nota da prova 2: "))
        if n1_>=0 and n2_>=0:
            break
        else:
            print("Dado inválido inserido, insira valores maiores ou iguais a zero para n1 e n2")
    return n1_,n2_

n1,n2 = coleta_notas()
print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
mg = calculo_media(n1,n2)
if mg >= 7:
    print("Sua média foi:",mg)
    print("Parabéns, você está aprovado!")
elif mg < 7 and n1 >= 0 and n2 >= 0:
    print("Sua média foi:",mg)
    print("Você  ainda  tem  uma  chance!  Estude  mais  para  o exame.")