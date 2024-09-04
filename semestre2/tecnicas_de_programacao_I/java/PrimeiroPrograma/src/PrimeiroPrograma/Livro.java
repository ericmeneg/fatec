package PrimeiroPrograma;

public class Livro {
	String nome;
	String descricao;
	double valor;
	String isbn;
	Autor autor;
	
	void mostrarDetalhes() {
		System.out.println("Exibindo detalhes do livro");
		System.out.println("O título desse livro é: " + nome);
		System.out.println("A descrição desse livro é: " + descricao);
		System.out.println("O preço desse livro é: " + valor);
		System.out.println("O código ISBN desse livro é: " + isbn);
		System.out.println("Exibindo detalhes do autor");
		System.out.println("O autor do livro é: " + autor.nome);
		System.out.println("O e-mail de contanto do autor é: " + autor.email);
		System.out.println("O CPF do autor é: " + autor.cpf);
		System.out.println("---------------------");
	}
}