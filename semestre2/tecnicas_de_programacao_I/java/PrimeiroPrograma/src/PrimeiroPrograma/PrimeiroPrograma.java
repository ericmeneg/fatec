package PrimeiroPrograma;

public class PrimeiroPrograma{
public static void main(String[] args){
	
	Livro livro = new Livro();
	
	livro.nome = "Java 8 Prático";
	livro.descricao = "Novos recursos da linguagem";
	livro.valor = 59.90;
	livro.isbn = "978-85-66250-46-6";
	
	Livro outroLivro = new Livro();
	
	outroLivro.nome = "Lógica de programação";
	outroLivro.descricao = "Livro bom";
	outroLivro.valor = 59.90;
	outroLivro.isbn = "978-85-66250-22-0";

	
	Autor autor = new Autor();
	autor.nome = "Rodrigo Turini";
	autor.email = "rodrigo.turinin@caelum.com.br";
	autor.cpf = "123.456.789.10";
	
	livro.autor = autor;
	
	Autor outroAutor = new Autor();
	outroAutor.nome = "Paulo Silveira";
	outroAutor.email = "paulo.silveira@caelum.com.br";
	outroAutor.cpf = "123.456.789.11";
	
	outroLivro.autor = outroAutor;
	livro.mostrarDetalhes();
	outroLivro.mostrarDetalhes();
}
}