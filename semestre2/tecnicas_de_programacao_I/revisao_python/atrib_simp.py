'''
Sem atribuição simplificada:
x = 10
y = 20
x = x + y - 10
print("x = ",x)
x = x - 5
print("x = ",x)
x = x * 10
print("x = ",x)
x = x / 15
print("x = ",x)

x = 10
y = 20
x = x * y - 10
print("x = ",x)
x = x - 5 + y
print("x = ",x)
'''

#Com atribuição simplificada:
x = 10
y = 20
x += y - 10
print("x = ",x)
x -= 5
print("x = ",x)
x *= 10
print("x = ",x)
x /= 15
print("x = ",x)

x = 10
y = 20
x *= y - 10
print("x = ",x)
x -= 5 + y
print("x = ",x)