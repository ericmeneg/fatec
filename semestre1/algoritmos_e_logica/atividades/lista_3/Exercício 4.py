print("Ferramenta de cálculo de desconto da loja ABC")
execucao = True
while execucao == True:
    teclado = True
    while teclado == True:
        valortotal = float(input("Digite o valor da compra (use . no lugar de ,): "))
        print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
        if 0<=valortotal and valortotal<199.99:
            valordescontado = valortotal * 0.95
            teclado = False
        elif 299.99>valortotal>=200:
            valordescontado = valortotal * 0.9
            teclado = False
        elif valortotal>=300:
            valordescontado = valortotal * 0.8
            teclado = False
        else:
            print("Valor inválido inserido, tente novamente")
    print("Valor total:",valortotal)
    print("Valor com desconto:",valordescontado)
    escolha = input("Gostaria de consultar outra compra? Digite S para sim ou N para não: ")
    if escolha == "N" or escolha =="n":
        execucao = False