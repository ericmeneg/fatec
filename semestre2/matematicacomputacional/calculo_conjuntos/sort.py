def sorter(u):
    for i in range(0,(len(u)-1)):
        for j in range(i+1, len(u)):
            if u[i] >= u[j]:
                temp = u[i]
                u[i] = u[j]
                u[j] = temp
    if u == []:
        return 'vazio'
    else:
        return u