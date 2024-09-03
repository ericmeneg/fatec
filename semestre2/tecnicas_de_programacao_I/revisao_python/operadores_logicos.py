x = 5
y = 3
r = (x > 2) and (y < x)
print("Resultado: ",r)
r = (x%2==0) and (y > 0)
print("Resultado: ",r)
r = (x > 2) or (y > x)
print("Resultado: ",r)
r = (x%2==0) or (y < 0)
print("Resultado: ",r)
r = not(x > 2)
print("Resultado: ",r)
r = not(x > 7) and (x > y)
print("Resultado: ",r)

x = 10
y = 20
z = 15
#x é maior ou igual a y?
print(x >= y)
#x é maior do que y+2?
print(x > y+2)
#x-5 é diferente de y+3?
print(x-5 != y+3)
#x é maior do que y e menor do que z?
print((x > y) and (x < z))