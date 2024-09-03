carros = ['gol','fusca','palio','onix']

print(carros[0])
print(carros[1])

carros[0] = "ferrari"
print(carros[0])

tamanho = len(carros)
print(tamanho)

print(carros[0])
print(carros[-4])
print(carros[-3])


lista = [10, 20, 30, 40, 50]
print(lista[0])
lista[0] = int(input('Digite um valor: '))
 
lista[1] = lista[0] + lista[2]
if(lista[1] > 5):
    print('Valor = ',lista[1])


numeros = [1, 2, 3]
[x, y, z] = numeros
print(x)
print(y)
print(z)


def func():
    return [10, 20, 30]

a, b, c = func()
print(a, b, c)

for indice in range(len(carros)):
    print(indice,carros[indice])

lista = [10, 20, 30, 40, 50]
print(lista[2:4])
print(lista[2:])
print(lista[:3])
print(lista[:])
print(lista[0:5:2])


lista1 = [1,2,3]
lista2 = [4,5,6]
lista3 = lista1+lista2
print(lista3)

lista1 = [1,2,3]
lista3 = 2 * lista1


lista = [1,2,3,4,5]
lista_copia = lista
print(id(lista))
print(id(lista_copia))

lista[0] = 100

print(lista)
print(lista_copia)

#cópia rasa com módulo copy
import copy
lista = [1,2,3, [4,5]]
lista_copia = lista.copy()

lista[0] = 100
lista_copia[3][0] = 40

print(lista)
print(lista_copia)

#deepcopy com o módulo copy
lista = [1,2,3, [4,5]]
lista_copia = copy.deepcopy(lista)

lista[0] = 100
lista_copia[3][0] = 40

print(lista)
print(lista_copia)

#removendo items da lista
lista =  [1,2,3,4,5,6]
del lista[0]
print(lista)
del lista[:2]
print(lista)

x = 2
if (x in lista):
    print('A lista contém',x)

#métodos da classe lista
lista = [21,12,3,44,5]
lista.sort()
print(lista)

lista.remove(3)
print(lista)

lista.append(10)
print(lista)

lista.insert(0,-1)
print(lista)

#listas aninhadas
lista_aninhada = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for lista in lista_aninhada:
    for item in lista:
        print(item)
 
for y in range(len(lista_aninhada)):
    for x in range(len(lista_aninhada[y])):
        print(y,x,lista_aninhada[y][x])

#compreensão de lista
numeros = [1,2,3,4,5,6,7,8,9,10]
pares = []
for x in numeros:
    if x%2 == 0:
        pares.append(x)
print(pares)

pares = [x for x in numeros if x%2 == 0]
print(pares)