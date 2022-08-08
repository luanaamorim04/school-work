//Luana Amorim Lima
#include <stdio.h>
#include <string.h>

int m[3][3], n;

int main(void)
{
	for (int i = 0; i < 3; i++)
		for (int j = 0; j < 3; j++)
			scanf("%d", &m[i][j]);

	for (int i = 0; i < 3; i++)
	{
		for (int j = 0; j < 3; j++)
		{
			printf("%d ", m[2-i][2-j]);
		}
		printf("\n");
	}
}