from intersec import inter
from duplichecker import dupeBoot

def union(a,b):
    intersection = inter(a,b)
    c = a + b
    union = c
    toBoot = []
    for i in range(0,len(c)):
        for j in range(0,len(intersection)):
            if c[i] == intersection[j]:
                toBoot.append(c[i])
    # I need to make a function that goes through toBoot and removes all duplicates, so that only one instance of the
    # item in duplicity is removed
    for i in toBoot:
        union.remove(i)
    return union