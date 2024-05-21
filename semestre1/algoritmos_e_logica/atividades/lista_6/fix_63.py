with open("semestre1/algoritmos_e_logica/atividades/lista_6/mensagem.txt","r", encoding="utf-8") as doc:
    texto = doc.read()
    listadepalavras = texto.split(" ")
    print("Nome: Eric Menegon RA:1051392411019 Turma DSM 1ºSEM 2024")
    print("Número de caracteres do texto:",len(texto))
    print("Palavras contidas em mensagem.txt:",listadepalavras)