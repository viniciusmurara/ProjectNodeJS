let livros = [];
let idCounter = 1;

// adicionar um livro
export function adicionarLivro(livro) {
    const novoLivro = {
        id: idCounter++,
        ...livro
    };
    livros.push(novoLivro);
    return novoLivro;
}

// listar todos os livros
export function listarLivros() {
    console.log("lista de livros:");
    livros.forEach(livro => {
        console.log(`ID: ${livro.id}\ntítulo: ${livro.titulo}\nautor: ${livro.autor}\nano de publicação: ${livro.anoPublicacao}\ngênero: ${livro.genero}\ndisponibilidade: ${livro.disponibilidade ? 'disponível' : 'emprestado'}\n`);
    });
}

// buscar um livro pelo titulo
export function buscarLivros(busca) {
    const livro = livros.find(livro => livro.titulo.toLowerCase() === busca.toLowerCase());
    if (livro) {
        console.log(`\nLivro encontrado com a busca ${busca}:\nID: ${livro.id}\ntítulo: ${livro.titulo}\nautor: ${livro.autor}\nano de publicação: ${livro.anoPublicacao}\ngênero: ${livro.genero}\ndisponibilidade: ${livro.disponibilidade ? 'disponível' : 'emprestado'}\n`);
    } else {
        console.log("\nlivro não encontrado");
    }
}

// editar um livro
export function editaLivro(id, titulo, autor, anoPublicacao, genero, disponibilidade){
    livros.forEach(livro => {
        if(id == livro.id){
            livro.titulo = titulo;
            livro.autor = autor;
            livro.anoPublicacao = anoPublicacao;
            livro.genero = genero;
            livro.disponibilidade = disponibilidade;
            console.log(`\nlivro com id ${id} teve os atributos editados`);
            listarLivros();
        }else{}
    });
}

// alterar diponibilidade de um livro
export function alterarDisponibilidade(id){
    livros.forEach(livro => {
        if(id == livro.id){
            if(livro.disponibilidade === true){
                console.log(`\nlivro com ID ${id} teve a disponibilidade alterada`);
                livro.disponibilidade = false;
                listarLivros();
            } else {
                livro.disponibilidade = true;
            }
        }else{}
    });
}

// remover um objeto livro
export function removerLivro(id) {
    const livroIndex = livros.findIndex(livro => livro.id === id);
    if (livroIndex !== -1) {
        livros.splice(livroIndex, 1);
        console.log(`\nlivro com ID ${id} foi removido`);
        listarLivros();
    } else {
        console.log(`\nlivro com ID ${id} não encontrado`);
    }
}