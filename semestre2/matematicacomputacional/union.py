from duplichecker import dupeBooter
#retorna lista com todos os items de a e b, incluíndo duplicados
a = [1,2,3,4,5]
b = [1,2,3]
def union(a,b):
    c = []
    for i in (range(0,len(a)+len(b))):
        c.append('element')
    for i in (range(0,len(c))):
        if i<len(a):
            c[i] = a[i]
        else:
            c[i] = b[i-len(a)]
    dupeBooter(c)
    return c

print(union(a,b))