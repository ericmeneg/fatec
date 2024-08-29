def inter(a,b):
    c = []
    for i in range(0,len(a)):
        for j in range(0,len(b)):
            if a[i] == b[j]:
                c.append(a[i])
    return c