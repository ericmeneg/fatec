compra1 = float(input("Digite o valor da compra 1: "))
compra2 = float(input("Digite o valor da compra 2: "))
compra3 = float(input("Digite o valor da compra 3: "))
#linhas 1-3 coletam os dados do usuário e os convertem de string para float


if compra1>=0:
    print("Valor total da compra 1:",compra1)
else:
    print("Dado inválido inserido para compra 1")

if(0<=compra1<100):
    comprad1 = compra1
elif(200>compra1>=100):
    comprad1 = compra1*0.9
elif(300>compra1>=200):
    comprad1 = compra1*0.85
elif(compra1>=300):
    comprad1 = compra1*0.8
else:
    comprad1 = "Inválido, digite um valor maior que zero para compra 1"
print("Valor com desconto da compra 1:",comprad1)
#linhas 6-17 separam o valor recebido em diferentes casos dependendo do intervalo de preço para aplicação do desconto adequado
#essas linhas vão se repetir com as devidas alterações para as compras 2 e 3

#começo dos blocos condicionais da compra 2
if compra2>=0:
    print("Valor total da compra 2:",compra2)
else:
    print("Dado inválido inserido para compra 2")

if(0<=compra2<100):
    comprad2 = compra2
elif(200>compra2>=100):
    comprad2 = compra2*0.9
elif(300>compra2>=200):
    comprad2 = compra2*0.85
elif(compra2>=300):
    comprad2 = compra2*0.8
else:
    comprad2 = "Inválido, digite um valor maior que zero para compra 2"
print("Valor com desconto da compra 2:",comprad2)

#começo dos blocos condicionais da compra 3
if compra3>=0:
    print("Valor total da compra 3:",compra3)
else:
    print("Dado inválido inserido para compra 3")

if(0<=compra3<100):
    comprad3 = compra3
elif(200>compra3>=100):
    comprad3 = compra3*0.9
elif(300>compra3>=200):
    comprad3 = compra3*0.85
elif(compra3>=300):
    comprad3 = compra3*0.8
else:
    comprad3 = "Inválido, digite um valor maior que zero para compra 3"
print("Valor com desconto da compra 3:",comprad3)