const express = require("express")
const app = express()
const port = 8000

const livroRoutes = require('./routes/livro')

app.use(express.json())
app.use('/livros', livroRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
