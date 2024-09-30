import { adicionarLivro, alterarDisponibilidade, buscarLivros, buscarLivrosAutor, editaLivro, listarLivros, removerLivro, listarLivroPorGenero, ordenarLivrosPorAno } from './biblioteca.js';

function iniciarSistema() {
    console.log("\n==== INÍCIO DO SISTEMA ====\n")

    const livro1 = { titulo: "1984", autor: "George Orwell", anoPublicacao: 1949, genero: "Ficção", disponibilidade: true };
    const livro2 = { titulo: "Building a Second Brain", autor: "Tiago Forte", anoPublicacao: 2023, genero: "Desenvolvimento Pessoal", disponibilidade: false };
    const livro3 = { titulo: "A República", autor: "Platão", anoPublicacao: 380, genero: "Filosofia", disponibilidade: true };
    const livro4 = { titulo: "A República", autor: "Platão", anoPublicacao: 380, genero: "Filosofia", disponibilidade: true };
    
    // adicionar os objetos livro
    adicionarLivro(livro1);
    adicionarLivro(livro2);
    adicionarLivro(livro3);
    adicionarLivro(livro4);

    // listar os objetos livro
    listarLivros();

    // buscar um livro pelo título
    buscarLivros("A República");

    // editar um objeto livro
    editaLivro(1, "O Ócio Criativo", "Domenico De Masi", 1995, "Desenvolvimento Pessoal", true);

    // alterar a disponibilidade do livro
    alterarDisponibilidade(3);

    // remover um objeto livro
    removerLivro(2);

    // buscar um livro pelo autor
    buscarLivrosAutor("Domenico De Masi");

    // filtrar livro por genero
    listarLivroPorGenero("Desenvolvimento Pessoal");

    // ordenar livros por ano de publicação
    ordenarLivrosPorAno("decrescente");
}
iniciarSistema();