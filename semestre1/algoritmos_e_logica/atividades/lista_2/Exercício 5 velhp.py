area = float(input("Digite o valor da área a ser pintada (em m): "))
print("Nome: Eric Vinicius da Silva Menegon RA: 1051392411019 Turma: DSM 2024")

#Fazendo a proporção: 1 lata = 108m^2
#Quando a área a ser pintada exige um número não inteiro de latas de tinta existe a necessidade da compra de uma lata de tinta inteira
#adicional.
nrolatas = int(area//108)
if area%108 != 0:
    nrolatas = nrolatas+1
precolatas = nrolatas*80
print("Para pintar a área dada com latas você precisará de:")
print("%i lata(s), que irá te custar R$%i" %(nrolatas,precolatas))

#Fazendo a proporção: 1 galão = 21,6m^2
#Quando a área a ser pintada exige um número não inteiro de galões de tinta existe a necessidade da compra de um galão de tinta inteiro
#adicional.
nrogaloes = int(area//21.6)
if area%21.6 != 0:
    nrogaloes = nrogaloes+1
precogaloes = nrogaloes*35
print("Para pintar a área dada com galões você precisará de:")
print("%i galão(galões), que irá te custar R$%i" %(nrogaloes,precogaloes))

#nrolatasmistura e nromistura são setados como 0 ao começo dessa seção para evitar erros na checagem das linhas 45 e 47
#Bloco 1 é o caso em que o mais rentável é comprar apenas latas, isso ocorre quando a área a ser pintada após o uso da penúltima lata (considerando 10% de folga) é maior do que 43,2m^2
#Bloco 2 é o caso em que o mais rentável é comprar apenas galões, isso ocorre qunado a área total a ser pintada (considerando 10% de folga) é inferior à 43,2m^2
#Bloco 3 é o caso em que o mais rentável é misturar galões e latas, isso ocorre quando tanto a área total a ser pintada quanto a área a ser pintada após o uso da penúltima lata (considerando 10% de folga) são superiores à 43,2m^2
nrolatasmistura = 0
nrogaloes = 0
nrolatas = 0
if ((area*1.1)%108)>43.2 or ((area*1.1)%108)==0:
    nrolatas = int(area//108)
    if area%108 != 0:
        nrolatas = nrolatas + 1
    precolatas = nrolatas * 80
elif (area*1.1)<108 and ((area*1.1)%108)<=43.2:
    nrogaloes = int(area//21.6)
    if area%21.6 != 0:
        nrogaloes = nrogaloes + 1
    precogaloes = nrogaloes * 35
elif (area*1.1)>108 and ((area*1.1)%108)<=43.2:
    nrolatasmistura = int((area//108))
    nrogaloesmistura = int((area%108)//21.6)
    if (area%108)%21.6 != 0:
        nrogaloesmistura = nrogaloesmistura + 1
    precomistura = (nrogaloesmistura*35)+(nrolatasmistura*80)

if nrolatas != 0:
    print("A forma mais barata é comprando apenas latas, não com mistura, o número de latas necessário é %i, pelo preço de R$%i" %(nrolatas,precolatas))
if nrogaloes != 0:
    print("A forma mais barata é comprando apenas galões, não com mistura, o número de galões necessário é %i, pelo preço de R$%i" %(nrogaloes,precogaloes))
if nrolatasmistura != 0:
    print("A forma mais barata de cobrir a área é comprando %i lata(s) e %i galão(galões), isso irá te custar R$%i" %(nrolatasmistura,nrogaloesmistura,precomistura))