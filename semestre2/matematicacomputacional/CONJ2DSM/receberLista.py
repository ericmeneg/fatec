def removerDuplicados(lista):
    duplicados = []
    for x in lista:
        print('huh')



def listaInput(texto):
    lista = []
    while True:
        item = input(texto)
        if item.isdigit() != True:
            break
        else:
            lista.append(int(item))
    return lista