#include <stdio.h>

int main(void)
{
	int vetor[1000], numero = 0, tamanho = 0;
    printf("digite os numeros do array\npara terminar digite -1\n");
    while (numero != -1) {
    	vetor[tamanho++] = numero;
    	scanf("%d", &numero);
    }
    
    for (int i = 1; i <= tamanho; i++){
        for (int j = i+1; j <= tamanho; j++){
            if (vetor[i]<vetor[j]){
                int a = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = a;
            }
        }
    }

    for (int i = 1; i <= tamanho; i++) {
        printf("%d, ", vetor[i]);
    }
    printf("\n");
}