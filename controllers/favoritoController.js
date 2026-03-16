const { getTodosLivros, addLivro, deletaFavoritoPorId } = require('../services/favoritoService')

function getFavoritos(req, res) {
  try {
    const livros = getTodosLivros()
    res.send(livros)
  } catch (error) {
    res.status(500).send({ message: 'Erro ao processar a requisição GET' })
  }
}

function addFavorito(req, res) {
  try {
    const id = req.params.id
    addLivro(id)
    res.status(201).send({ message: 'Livro adicionado aos favoritos com sucesso' })
  } catch (error) {
    res.status(500).send({ message: 'Erro ao tentar favoritar livro' })
  }
}

function deleteFavorito(req, res) {
  try {
    const id = req.params.id
    if(id && Number(id)) {
      deletaFavoritoPorId(id)
      res.status(200).send({ message: 'Livro removido dos favoritos com sucesso' })
    } else {
      res.status(422).send({ message: 'ID inválido' })
    }
  } catch (error) {
    res.status(500).send({ message: 'Erro ao tentar favoritar livro' })
  }
}

module.exports = {
    getFavoritos,
    addFavorito,
    deleteFavorito
}