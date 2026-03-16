const cors = require('cors');
const express = require("express")
const app = express()
const port = 8000

app.use(cors());

const livroRoutes = require('./routes/livro')
const favoritoRoutes = require('./routes/favorito')

app.use(express.json())
app.use('/livros', livroRoutes)
app.use('/favoritos', favoritoRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})