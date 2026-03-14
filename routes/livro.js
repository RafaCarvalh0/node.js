const { Router } = require('express')
const router = Router()

const { getLivros, getLivro, createLivro, updateLivro, deleteLivro } = require('../controllers/livroController')

router.get('/', getLivros)
router.get('/:id', getLivro)
router.post('/', createLivro)
router.patch('/:id', updateLivro)
router.delete('/:id', deleteLivro) 

module.exports = router