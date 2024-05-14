print("Verificador de divisibilidade por 10; 5 e 2")
n = float(input("Digite o número a ser verificado: "))
print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
por10 = False
por5 = False
por2 = False
if n % 10 == 0:
    print(n,"é divísivel por 10.")
    por10 = True
if n % 5 == 0:
    print(n,"é divísivel por 5.")
    por5 = True
if n % 2 == 0:
    print(n,"é divísivel por 2.")
    por2 = True
if por10 == False and por5 == False and por2 == False:
    print(n,"não é divísivel por 2; 5 ou 10.")