const { Router } = require("express")
const { getFavoritos, addFavorito, deleteFavorito } = require("../controllers/favoritoController")

const router = Router()

router.get('/', getFavoritos)
router.post('/:id', addFavorito)
router.delete('/:id', deleteFavorito)

module.exports = router