const { Router } = require('express')
const router = Router()

const { getLivros, getLivro, createLivro, patchLivro, deleteLivro } = require('../controllers/livroController')

router.get('/', getLivros)
router.get('/:id', getLivro)
router.post('/', createLivro)
router.patch('/:id', patchLivro)
router.delete('/:id', deleteLivro) 

module.exports = router