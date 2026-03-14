const { get } = require('http')
const { getTodosLivros } = require('../services/livrosService')

function getLivros(req, res) {
  try {
    const livros = getTodosLivros()
    res.send(livros)
  } catch (error) {
    res.status(500).send({ message: 'Erro ao processar a requisição GET' })
  }
}

function createLivro(req, res) {
  try {
    res.send({ message: 'Vc fez uma requisição POST', body: req.body })
  } catch (error) {
    res.status(500).send({ message: 'Erro ao processar a requisição POST' })
  }
}

function updateLivro(req, res) {
  try {
    const id = req.params.id
    res.send({ message: `Vc fez uma requisição PATCH no ID ${id}`, body: req.body })
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
  createLivro,
  updateLivro,
  deleteLivro
}