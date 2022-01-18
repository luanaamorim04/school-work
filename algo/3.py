# Luana Amorim Lima
# Rafael Nascimento 
# Joao Victor Pereira Cavalcante 

n = 100
arr = input().split()


def g(j, i):
	if j < i:
		return

	g(j-1, i)
	if int(arr[i]) < int(arr[j]):
		tmp = arr[i]
		arr[i] = arr[j]
		arr[j] = tmp


def f(i):
	if i < 0:
		return 

	f(i-1)
	g(n-1, i)

f(n-1)

print(arr)