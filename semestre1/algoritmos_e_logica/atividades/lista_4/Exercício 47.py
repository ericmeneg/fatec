def div_5(x):
    if x % 5 == 0:
        return True
    else:
        return False
    
def div_2(x):
    if x % 2 == 0:
        return True
    else:
        return False
    
def div_10(x):
    if x % 10 == 0:
        return True
    else:
        return False
    
print("Verificador de divisibilidade por 10; 5 e 2")
n = float(input("Digite o número a ser verificado: "))
print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")

por2 = div_2(n)
por5 = div_5(n)
por10 = div_10(n)

if por2 == True:
    print(n,"é divisível por 2.")
if por5 == True:
    print(n,"é divisível por 5.")
if por10 == True:
    print(n,"é divisível por 10")
if por10 == False and por5 == False and por2 == False:
    print(n,"não é divisível por 2; 5 ou 10.")