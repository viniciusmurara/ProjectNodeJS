let livros = [];
let idCounter = 1;

// adicionar um livro
export function adicionarLivro(livro) {
    const novoLivro = {
        id: idCounter++,
        ...livro
    };
    let validaLivro = true;
    livros.forEach(livro => {
        if(novoLivro.titulo == livro.titulo){
            validaLivro = false;
        } else{
            validaLivro = true;
        }
    });

    // validação de dados para adição de livros
    if (validaLivro == true){
        livros.push(novoLivro);
    } else {
        console.log("Erro na criação do Livro com id " + novoLivro.id + ", título já existente!\n");
    }
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
    const livroEncontrado = livros.find(livro => livro.titulo.toLowerCase() === busca.toLowerCase());
    if (livroEncontrado) {
        console.log(`\nLivro encontrado com a busca ${busca}:\nID: ${livroEncontrado.id}\ntítulo: ${livroEncontrado.titulo}\nautor: ${livroEncontrado.autor}\nano de publicação: ${livroEncontrado.anoPublicacao}\ngênero: ${livroEncontrado.genero}\ndisponibilidade: ${livroEncontrado.disponibilidade ? 'disponível' : 'emprestado'}\n`);
    } else {
        console.log("\nLivro não encontrado");
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

// buscar um livro pelo autor
export function buscarLivrosAutor(busca) {
    const livroEncontrado = livros.find(livro => livro.autor.toLowerCase() === busca.toLowerCase());
    if (livroEncontrado) {
        console.log(`\nLivro encontrado com a busca ${busca}:\nID: ${livroEncontrado.id}\ntítulo: ${livroEncontrado.titulo}\nautor: ${livroEncontrado.autor}\nano de publicação: ${livroEncontrado.anoPublicacao}\ngênero: ${livroEncontrado.genero}\ndisponibilidade: ${livroEncontrado.disponibilidade ? 'disponível' : 'emprestado'}\n`);
    } else {
        console.log("\nLivro não encontrado");
    }
}

// filtrar livro por genero
export function listarLivroPorGenero(genero){
    let validaGenero = false;
    console.log(`\nLivro(s) encontrado(s) com o gênero ${genero}:`);
    livros.forEach(livro => {
        if(livro.genero.toLowerCase() === genero.toLowerCase()){
            console.log(`ID: ${livro.id}\ntítulo: ${livro.titulo}\nautor: ${livro.autor}\nano de publicação: ${livro.anoPublicacao}\ngênero: ${livro.genero}\ndisponibilidade: ${livro.disponibilidade ? 'disponível' : 'emprestado'}\n`);
            validaGenero = true;
        }
    });
    if(validaGenero == false){
        console.log("Gênero não encontrado");
    }
}