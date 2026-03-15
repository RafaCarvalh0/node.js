const fs = require('fs')

function getTodosLivros() {
  return JSON.parse(fs.readFileSync('livros.json', 'utf-8'))
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync('livros.json', 'utf-8'))
  const livroFiltrado = livros.filter(livro => livro.id === Number(id))
  return livroFiltrado[0]
}

function addLivro(novoLivro) {
  const livros = JSON.parse(fs.readFileSync('livros.json', 'utf-8'))
  const novaListaDeLivros = [...livros, novoLivro]
  fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros))
}

function atualizarLivro(id, livroAtualizado) {
  const livros = JSON.parse(fs.readFileSync('livros.json', 'utf-8'))
  const livroIndex = livros.findIndex(livro => String(livro.id) === String(id))

  if (livroIndex !== -1) {
    const conteudoAtualizado = { ...livros[livroIndex], ...livroAtualizado }
    livros[livroIndex] = conteudoAtualizado
    fs.writeFileSync('livros.json', JSON.stringify(livros))
  }
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  addLivro,
  atualizarLivro
}