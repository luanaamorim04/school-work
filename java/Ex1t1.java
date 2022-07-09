// Luana Amorim Lima
import java.util.Scanner;
public class Ex1t1 {
	public static void main(String[] args) {
		Scanner a = new Scanner(System.in);
        System.out.println("Nome Completo: ");
        String nome = a.nextLine();
        System.out.println("Salario: ");
        double num = a.nextDouble();

        System.out.print(nome + " ");
		if (num >= 50000)
		{
			System.out.println("Marajá");
		}
		else if (num >= 20000)
		{
			System.out.println("Tranquila");
		}
		else if (num >= 10000)
		{
			System.out.println("Equilibrada");
		}
		else if (num >= 5000)
		{
			System.out.println("Estável");
		}
		else
		{
			System.out.println("Progredindo");
		}
	}
}