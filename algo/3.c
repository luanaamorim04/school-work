//Luana Amorim Lima
#include <stdio.h>
#include <string.h>

int m[3][3], n;

int main(void)
{
	for (int i = 0; i < 3; i++)
		for (int j = 0; j < 3; j++)
			scanf("%d", &m[i][j]);

	scanf("%d", &n);

	for (int i = 0; i < 3; i++)
	{
		for (int j = 0; j < 3; j++)
		{
			m[i][j] *= n;
			printf("%d ", m[i][j]);
		}
		printf("\n");
	}
}