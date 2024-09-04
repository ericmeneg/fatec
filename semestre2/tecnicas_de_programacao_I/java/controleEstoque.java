public class controleEstoque {
	public static void main(String[] args) {
		// declaracao de variaveis
		double livroJava8 = 59.90;
		double livroTDD = 59.90;

		double soma = livroJava8 + livroTDD;
		System.out.println("O valor total do estoque é R$" + soma);

		// casting
		int numeroInteiro = (int) livroTDD;
		System.out.println(numeroInteiro);
		
		Livro livro = new Livro();
		livro.nome = "Java 8 prático";
		livro.descricao = "Livro  mt legal";
		livro.valor = 100000000.32;
		livro.isbn = "100.200.300.400.500";
		System.out.println(livro.isbn);
	}
}

public class Livro {
	String nome;
	String descricao;
	double valor;
	String isbn;
}