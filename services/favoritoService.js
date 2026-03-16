const fs = require('fs');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('favoritos.json'));
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync('favoritos.json'));
    const livrosFiltrados = livros.filter(livro => livro.id !== id);
    fs.writeFileSync('favoritos.json', JSON.stringify(livrosFiltrados));
}

function addLivro(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json', 'utf-8'))
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json', 'utf-8'))

    const livroInserido = livros.find(livro => livro.id === id);
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaDeLivrosFavoritos))
}

module.exports = {
    getTodosLivros,
    deletaFavoritoPorId,
    addLivro
};