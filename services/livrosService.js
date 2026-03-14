const fs = require('fs')

function getTodosLivros() {
  return JSON.parse(fs.readFileSync('livros.json', 'utf-8'))
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync('livros.json', 'utf-8'))
  const livroFiltrado = livros.filter(livro => livro.id === Number(id))
  return livroFiltrado[0]
}

module.exports = {
  getTodosLivros,
  getLivroPorId
}