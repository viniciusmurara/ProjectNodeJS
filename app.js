import { adicionarLivro, alterarDisponibilidade, buscarLivros, editaLivro, listarLivros, removerLivro } from './biblioteca.js';

function iniciarSistema() {
    console.log("\n==== INÍCIO DO SISTEMA ====\n")

    const livro1 = { titulo: "1984", autor: "George Orwell", anoPublicacao: 1949, genero: "Ficção", disponibilidade: true };
    const livro2 = { titulo: "Building a Second Brain", autor: "Tiago Forte", anoPublicacao: 2023, genero: "Evolução Pessoal", disponibilidade: false };
    const livro3 = { titulo: "A República", autor: "Platão", anoPublicacao: 380, genero: "Filosofia", disponibilidade: true };
    
    // adicionar os objetos livro
    adicionarLivro(livro1);
    adicionarLivro(livro2);
    adicionarLivro(livro3);

    // listar os objetos livro
    console.log("lista de livros:");
    listarLivros();

    // buscar um livro pelo título
    console.log(buscarLivros("A República"));

    // editar um objeto livro
    editaLivro(1, "O Ócio Criativo", "Domenico De Masi", 1995, "Evolução Pessoal", true);

    // alterar a disponibilidade do livro
    alterarDisponibilidade(3);

    // removendo um objeto livro
    removerLivro(2);
}

iniciarSistema();
