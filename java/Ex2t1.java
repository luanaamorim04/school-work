// Luana Amorim Lima
import java.util.Scanner;
public class Ex2t1 {
	public static void main(String[] args) {
		Scanner a = new Scanner(System.in);
        System.out.println("Quantidade de canteiros: ");
        int qnt = a.nextInt();
        while ((qnt--) != 0)
        {
        	System.out.println("comprimento: ");
        	double c = a.nextDouble();
        	System.out.println("largura: ");
        	double l = a.nextDouble();
        	System.out.println("Área: " + c*l);
        }
	}
}