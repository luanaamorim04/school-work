//Luana Amorim Lima
#include <stdio.h>
#include <string.h>

char a[100], b[100];
int i;

int main(void)
{
	scanf("%s", a);
	scanf("%s", b);
	while (a[i] == b[i] && a[i] != '\0' && b[i] != '\0') ++i;

	if (a[i] > b[i])
		printf("%s %s\n", b, a);
	else
		printf("%s %s\n", a, b);
}