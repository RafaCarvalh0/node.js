const { get } = require('http')
const { getTodosLivros, getLivroPorId, addLivro, atualizarLivro } = require('../services/livrosService')

function getLivros(req, res) {
  try {
    const livros = getTodosLivros()
    res.send(livros)
  } catch (error) {
    res.status(500).send({ message: 'Erro ao processar a requisição GET' })
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id
    const livro = getLivroPorId(id)
    res.send(livro)
  } catch (error) {
    res.status(500).send({ message: 'Erro ao processar a requisição GET' })
  }
}

function createLivro(req, res) {
  try {
    const LivroNovo = req.body
    addLivro(LivroNovo)
    res.status(201).send({ message: 'Livro adicionado com sucesso', body: req.body })
  } catch (error) {
    res.status(500).send({ message: 'Erro ao tentar adicionar livro' })
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id
    const livroAtualizado = req.body
    
    const livroAtual = getLivroPorId(id)
    
    if (livroAtual) {
      atualizarLivro(id, livroAtualizado)
      const livroModificado = getLivroPorId(id)
      res.send({ message: 'Livro atualizado com sucesso', body: livroModificado })
    } else {
      res.status(404).send({ message: 'Livro não encontrado' })
    }
  } catch (error) {
    res.status(500).send({ message: 'Erro ao processar a requisição PATCH' })
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id
    res.send({ message: `Vc fez uma requisição DELETE no ID ${id}` })
  } catch (error) {
    res.status(500).send({ message: 'Erro ao processar a requisição DELETE' })
  }
}

module.exports = {
  getLivros,
  getLivro,
  createLivro,
  patchLivro,
  deleteLivro
}