from diferenca import diferenca
from interseccao import inter
from uniao import uniao

def difSim(a,b):
    aub = uniao(a,b)
    ainterb = inter(a,b)
    return diferenca(aub,ainterb)