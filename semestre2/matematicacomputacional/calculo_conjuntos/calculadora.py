from sort import sorter
from intersec import inter
from union import union
from subt import subtract

def listInput(select, text):
    list = []
    print(select)
    while True:
        item = input(text)
        if item.isdigit() != True:
            break
        else:
            list.append(int(item))
    return list


while True:
    choice = int(input('''Digite o número correspondente a operação desejada:
          1 - Classificação
          2 - Intersecção
          3 - União
          4 - Diferença
          5 - Diferença simétrica
        
          Escolha: '''))
    if 0 < choice <= 5:
        break
    else:
        print('Digite um número válido!')

match choice:
    case 1:
        listaA = listInput('CLASSIFICAÇÃO EM ORDEM CRESCENTE','Digite um número para a primeira lista, quando acabar, digite "fim": ')
        listaB = listInput('','Digite um número para a segunda lista, quando acabar, digite "fim": ')
        listaC = listaA + listaB
        print(sorter(listaC))
    
    case 2:
        listaA = listInput('INTERSECÇÃO ENTRE DUAS LISTAS','Digite um número para a primeira lista, quando acabar, digite "fim": ')
        listaB = listInput('','Digite um número para a segunda lista, quando acabar, digite "fim": ')
        print(inter(listaA,listaB))

    case 3:
        listaA = listInput('UNIÃO ENTRE DUAS LISTAS','Digite um número para a primeira lista, quando acabar, digite "fim": ')
        listaB = listInput('','Digite um número para a segunda lista, quando acabar, digite "fim": ')
        print(union(listaA,listaB))

    case 4:
        listaA = listInput('DIFERENÇA ENTRE DUAS LISTAS','Digite um número para a primeira lista, quando acabar, digite "fim": ')
        listaB = listInput('','Digite um número para a segunda lista, quando acabar, digite "fim": ')
        print(subtract(listaA,listaB))

    case 5:
        listaA = listInput('DIFERENÇA SIMÉTRICA ENTRE DUAS LISTAS','Digite um número para a primeira lista, quando acabar, digite "fim": ')
        listaB = listInput('','Digite um número para a segunda lista, quando acabar, digite "fim": ')
        aub = union(listaA,listaB)
        ainterb = inter(listaA,listaB)
        print(subtract(aub,ainterb))