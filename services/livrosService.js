const fs = require('fs')

function getTodosLivros() {
  const livros = JSON.parse(fs.readFileSync('livros.json', 'utf-8'))
  return livros
}

module.exports = {
  getTodosLivros
}