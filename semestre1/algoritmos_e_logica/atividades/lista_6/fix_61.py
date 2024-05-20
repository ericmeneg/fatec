emails = 0
import os
print(os.getcwd())
while True:
    with open("semestre1/algoritmos_e_logica/atividades/lista_6/email.txt","a+",encoding="utf-8") as doc:
        emailnovo = input("Digite um email para cadastrar: ")+"\n"
        doc.write(emailnovo)
    emails += 1
    if emails == 3:
        break

with open("semestre1/algoritmos_e_logica/atividades/lista_6/email.txt","r",encoding="utf-8") as doc:
    print(doc.read())