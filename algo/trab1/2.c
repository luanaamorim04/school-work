#include <stdio.h>

int main(void){
	char n[100];
	int tam, pot = 1, decimal = 0, dig;
	scanf("%s", n);
	for (tam = 0; n[tam] != '\0'; tam++);
	for (int indice = tam-1; indice >= 0; indice--)
	{
		if (n[indice] < 'a'){
			dig = n[indice] - '0';
		} 
		else {
			dig = n[indice] - 'a' + 10;
		}

		decimal += (pot*dig);
		pot *= 16;
	}

	printf("%d\n", decimal);
}