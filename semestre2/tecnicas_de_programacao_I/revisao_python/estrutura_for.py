import math
for x in [0,1,2,3,4,5]:
 print("A raiz de ",x," é igual a ",math.sqrt(x))

compras = ["Miojo","Ovo","Leite","Pão"]
for item in compras:
 print("Produto: ",item)

for x in range(5):
    print(x)

for x in range(10):
 print(x)

for x in range(3,10):
 print(x)

for x in range(3,10,2):
 print(x)

A = int(input("Digite o valor de A: "))
B = int(input("Digite o valor de B: "))
while A < B:
    A = A + 1
    if A == 5: 
        break
print("Valor = ",A)
 
print("Fim do programa")

A = int(input("Digite o valor de A: "))
B = int(input("Digite o valor de B: "))
while A < B:
    A = A + 1
    if A == 5: 
        continue

    print("Valor = ",A)
 
print("Fim do programa")