import java.util.Scanner;
public class teste {
    public static void main(String[] args) {
        Scanner a = new Scanner(System.in);
        System.out.println("Preço por Mbyte: ");
        double preco = a.nextDouble();
        int qnt, tam;
        while (true)
        {
            qnt = a.nextInt();
            tam = a.nextInt();
            if (qnt == 0) 
            {
                break;
            }
            System.out.println("Preço total: " + (qnt*tam*preco));
        }
    }
}