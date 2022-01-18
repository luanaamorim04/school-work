# Luana Amorim Lima
# Rafael Nascimento 
# Joao Victor Pereira Cavalcante 

n = 1000
arr = input().split()
mapa = {}

def f(idx):
	if idx < 0:
		return
	f(idx-1)
	if arr[idx] not in mapa:
		mapa[arr[idx]] = 1
	else:
		mapa[arr[idx]] += 1

f(n-1)

def r(idx):
	if idx < 0:
		return

	r(idx-1)	
	if mapa[arr[idx]] != -1:
		print(arr[idx], ":", mapa[arr[idx]])

	mapa[arr[idx]] = -1


r(n-1)


