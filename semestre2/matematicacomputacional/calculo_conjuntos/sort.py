a = [3,7,9,11,13]
b = [5,2,4,6,10]
u = []

length = len(a)+len(b)
for i in range(0,length):
    u.append('empty')

for i in range(0,5):
    u[i] = a[i]
    u[i+len(a)] = b[i]


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

u = sorter(u)
print(u)
            