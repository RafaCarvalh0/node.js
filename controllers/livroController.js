const { getTodosLivros, getLivroPorId, addLivro, atualizarLivro, deletaLivroPorId } = require('../services/livrosService')

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
    if (id && Number(id)) {
      const livro = getLivroPorId(id)
      if (livro) {
        res.send(livro)
      } else {
        res.status(404).send({ message: 'Livro não encontrado' })
      }
    } else {
      res.status(422).send({ message: 'ID inválido' })
    }
  } catch (error) {
    res.status(500).send({ message: 'Erro ao processar a requisição GET' })
  }
}

function createLivro(req, res) {
  try {
    const livroNovo = req.body
    if (livroNovo.titulo) {
      addLivro(livroNovo)
      res.status(201).send({ message: 'Livro adicionado com sucesso', body: req.body })
    } else {
      res.status(422).send({ message: 'O campo "titulo" é obrigatório' })
    }
  } catch (error) {
    res.status(500).send({ message: 'Erro ao tentar adicionar livro' })
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id
    
    if (id && Number(id)) {
      const livroAtualizado = req.body
      const livroAtual = getLivroPorId(id)
      
      if (livroAtual) {
        atualizarLivro(id, livroAtualizado)
        const livroModificado = getLivroPorId(id)
        res.send({ message: 'Livro atualizado com sucesso', body: livroModificado })
      } else {
        res.status(404).send({ message: 'Livro não encontrado' })
      }
    } else {
      res.status(422).send({ message: 'ID inválido' })
    }
  } catch (error) {
    res.status(500).send({ message: 'Erro ao processar a requisição PATCH' })
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id
    if (id && Number(id)) {
      deletaLivroPorId(id)
      res.send({ message: 'Livro deletado com sucesso' })
    } else {
      res.status(422).send({ message: 'ID inválido' })
    }
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