from interseccao import inter
from classificacao import ordenador

def uniao(a,b):
    interseccao = inter(a,b)
    c = a + b
    uniao = c
    duplicados = []
    for i in range(0,len(c)):
        for j in range(0,len(interseccao)):
            if c[i] == interseccao[j]:
                if (duplicados.count(c[i])+1) < c.count(c[i]):
                    duplicados.append(c[i])
    for i in duplicados:
        uniao.remove(i)
    if uniao == []:
        return 'vazio'
    else:
        return ordenador(uniao)