def inter(a,b):
    print(a,b)
    for i in range(0,len(a)):
        for j in range(0,len(b)):
            print("Par:",a[i],b[j])

a = [1,4,54,10]
b = [2,7,54,10]
inter(a,b)