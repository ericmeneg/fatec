print("Ferramenta de cálculo de média")
nome = input("Digite o seu nome:")
ra = input("Digite o seu RA: ")

def coleta_notas(status_):
    if status_ == "inicial":
        while True:
            n1_ = float(input("Digite a sua nota da prova 1: "))
            n2_ = float(input("Digite a sua nota da prova 2: "))
            if n1_>=0 and n2_>=0:
                break
            else:
                print("Dado inválido inserido, insira valores maiores ou iguais a zero para n1 e n2")
        return n1_,n2_
    if status_ == "exame":
        while True:
            n1_ = float(input("Digite a sua nota no exame: "))
            if n1_ >= 0:
                break
            else:
                print("Dado inválido inserido, insira um valor maior ou igual a zero")
        return n1_
        
def calculo_media(v1_,v2_):
        m_ = (v1_+v2_)/2
        return m_

status = "inicial"
n1,n2 = coleta_notas(status)
mg = calculo_media(n1,n2)

print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")

if mg >= 7:
    print("Sua média foi:",mg)
    print("Parabéns, você está aprovado!")
    execucao = False
elif mg < 7:
    print("Sua média foi:",mg)
    print("A média foi insuficiente")
    status = "exame"
    ne = coleta_notas(status)
    mf = calculo_media(mg,ne)
    print("Sua média final foi",mf)
    if mf >= 5:
        print("Parabéns, você aproveitou a sua chance! Está aprovado.")
    elif mf < 5:
        print("Estude mais para a próxima. Você não alcançou o mínimo necessário.")
