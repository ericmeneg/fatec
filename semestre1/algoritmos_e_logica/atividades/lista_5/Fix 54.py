nome = input("Digite o nome do aluno: ")
def coleta(p):
    while True:
        n = float(input("Digite a nota da"+p+": "))
        if n<0 or n>10:
            print("Digite uma nota válida")
        else:
            break
    return n

n1 = coleta(" P1")
n2 = coleta(" P2")
mg = ((n1*4)+(n2*6))/10

print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
if mg >=9:
    print("Conceito: A")
    print("Situação: Aprovado")
elif mg >=7:
    print("Conceito: B")
    print("Situação: Aprovado")
elif mg >=3:
    print("Conceito: C")
    print("Situação: Exame")
else:
    print("Conceito: D")
    print("Situação: DP")