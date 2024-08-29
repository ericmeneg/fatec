from intersec import inter
from sort import sorter

def union(a,b):
    intersection = inter(a,b)
    c = a + b
    union = c
    toBoot = []
    for i in range(0,len(c)):
        for j in range(0,len(intersection)):
            if c[i] == intersection[j]:
                if (toBoot.count(c[i])+1) < c.count(c[i]):
                    toBoot.append(c[i])
    for i in toBoot:
        union.remove(i)
    if union == []:
        return 'vazio'
    else:
        return sorter(union)