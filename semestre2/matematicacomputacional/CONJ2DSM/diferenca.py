from interseccao import inter
def diferenca(a,b):
    dif = a.copy()
    interseccao = inter(a,b)
    for i in interseccao:
        dif.remove(i)
    if dif == []:
        return 'vazio'
    else:
        return dif