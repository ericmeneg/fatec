senhas = 0
while True:
    with open("semestre1/algoritmos_e_logica/atividades/lista_6/senhas.txt","a+",encoding="utf-8") as doc:
        senhanova = input("Digite uma senha para cadastrar: ")+"\n"
        doc.write(senhanova)
    senhas += 1
    if senhas == 5:
        break

with open("semestre1/algoritmos_e_logica/atividades/lista_6/senhas.txt","r",encoding="utf-8") as doc:
    print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
    print(doc.read())