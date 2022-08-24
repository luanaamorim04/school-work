#include <stdio.h>

int main(void){
	int n, primo = 1;
	scanf("%d", &n);
	for (int i = 2; i < n; i++){
		if (n%i == 0) {
			primo = 0;
		}
	}

	if (primo){
		printf("primo\n");
	}
	else{
		printf("composto\n");
	}
}