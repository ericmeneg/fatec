from intersec import inter
def subtract(a,b):
    subt = a
    interseccao = inter(a,b)
    for i in interseccao:
        subt.remove(i)
    if subt == []:
        return 'vazio'
    else:
        return subt