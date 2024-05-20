with open("semestre1/algoritmos_e_logica/atividades/lista_6/mensagem.txt","r", encoding="utf-8") as doc:
    texto = doc.read()
    listadepalavras = texto.split(" ")
    print(len(texto))
    print(listadepalavras)