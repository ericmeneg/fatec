with open('cliente_email.txt', 'a+', encoding='utf-8') as doc:
    emails = 0
    while True:
        novoEmail = '\n' + input('Digite um endereço de email: ')
        doc.write(novoEmail)
        emails = emails + 1
        if emails == 3:
            break

print('''Nome: Eric Vinicius da Silva Menegon
RA: 1051392411019''')

with open('cliente_email.txt', 'r', encoding='utf-8') as doc:
    nroLinhas = 0
    linhas = doc.readlines()
    for linha in linhas:
        nroLinhas = nroLinhas + 1
        if nroLinhas < 6:
            print('Tamanho da linha:',str(len(linha)-1)+'''
texto da linha:''',linha)
        else:
            print('Tamanho da linha:',str(len(linha))+'''
texto da linha:''',linha)
