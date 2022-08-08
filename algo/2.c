#include <stdio.h>
#include <string.h>

int posicao(char letra, char string[]){
	for (int i = 0; string[i] != '\0'; i++){
		if (string[i] == letra){
			return i;
		}
	}
	return 10000;
}

int main(void){
	char string[100], letra;
	printf("Letra: ");
	scanf("%c", &letra);
	printf("String: ");
	scanf("%s", string);
	printf("%d\n", posicao(letra, string));
}