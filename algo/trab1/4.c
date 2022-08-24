#include <stdio.h>

int main(void){
	int tam, pot = 1, decimal, indice = 0;
	char binario[100];
	scanf("%d", &decimal);
	while (decimal != 0){
		binario[indice++] = (decimal % 2) + '0';
		decimal /= 2;
	}

	for (int i = indice - 1; i >= 0; i--){
		printf("%c", binario[i]);
	}

	printf("\n");
}