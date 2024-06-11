def entrada_dados(prova):
    while True:
        n = float(input('Digite a nota da '+prova+': '))
        if n > 10 or n < 0:
            print('Digite um número válido para a nota (entre 0 e 10)!')
        else:
            return n

n1 = entrada_dados('P1')
n2 = entrada_dados('P2')
n3 = entrada_dados('P3')

def media(p1,p2,p3):
    mf_ = (p1*0.3)+(p2*0.3)+(p3*0.4)
    return mf_

mf = media(n1,n2,n3)

print('''Nome: Eric Vinicius da Silva Menegon
RA: 1051392411019''')
print('A média final do aluno foi:',mf)
if 10 >= mf >= 6:
    print('Situação: Aprovado')
elif 6 > mf >= 3:
    print('Situação: Exame')
else:
    print('Situação: DP')