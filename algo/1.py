# Luana Amorim Lima
# Rafael Nascimento 
# Joao Victor Pereira Cavalcante 

n1 = input()
n2 = input()
resp = []
t = max(len(n2), len(n1))

def f(sobra, idx):
	if idx >= t:
		if sobra:
			resp.append(1)
		return
  
	d1 = int(n1[len(n1) - idx - 1]) if idx < len(n1) else 0
	d2 = int(n2[len(n2) - idx - 1]) if idx < len(n2) else 0
	soma = sobra + d1 + d2
	resp.append(soma % 2) 
	sobra = (soma >= 2)

	f(sobra, idx+1)

f(0, 0)

def p(idx):
	if (idx < 0):
		return

	print(resp[idx], end="")
	p(idx-1)

p(len(resp) - 1)
print()













