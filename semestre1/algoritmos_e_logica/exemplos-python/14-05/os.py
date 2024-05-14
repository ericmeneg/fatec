import os

arquivo = open("semestre1/algoritmos_e_logica/atividades/lista_5/Fix 55.py", "r", encoding="utf-8")
print(type(arquivo))
arquivo.seek(1000)
print(arquivo.tell())
arquivolido = arquivo.read()
print(arquivolido)
arquivo.close()