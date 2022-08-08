//Luana Amorim Lima
#include <stdio.h>
#include <string.h>

double a, b, c;

int main(void)
{
	scanf("%lf%lf%lf", &a, &b, &c);
	double m = (a + 2*b + 3*c + ((a+b+c)/3)) / 7;
	if (m < 4) printf("E\n");
	else if (m < 6) printf("D\n");
	else if (m < 7.5) printf("C\n");
	else if (m < 9.5) printf("B\n");
	else printf("A\n");
}