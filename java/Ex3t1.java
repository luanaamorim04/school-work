// Luana Amorim Lima
import java.util.Scanner;
public class Ex3t1 {
    public static void main(String[] args) {
        Scanner a = new Scanner(System.in);
        int qnt = 100;
        int[] idades = new int[100];
        while ((qnt--) != 0)
        {
            System.out.println("idade do aluno " + (100 - qnt) + ":");
            int idade = a.nextInt();
            idades[idade]++;
        }
        for (int i = 12; i <= 20; i++)
        {
            System.out.println("Idade " + i + ": " + idades[i]);
        }
    }
}