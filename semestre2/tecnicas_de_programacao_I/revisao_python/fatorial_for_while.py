#Usando while
N = int(input("Digite N:"))
fat = 1
i = 1
while (i <= N):
 fat = fat * i
 i = i + 1
print("Fatorial: ",fat)
      
#Usando for
N = int(input("Digite N:"))
fat = 1
for i in range(1,N+1):
 fat = fat * i
print("Fatorial: ",fat)