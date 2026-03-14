1- Start de um projeto node.js
`npm init`
`npm install express`

criar arquivo "app.js" {

    const express = require("express")
    const app = express()
    const port = 8000

    app.get("/", (req, res) => {
    res.send("Hello World!")
    })

    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
    })
}

`npm install nodemon`

no arquivo "package.json" colocar "dev": "nodemon app.js" dentro da tag script

2- Para rodar o projeto
`npm run dev`

3- Exemplos de rota {
    const { Router } = require('express')
    const router = Router()

    router.get('/', (req, res) => {
    res.json({ 'Vc fez uma requisição GET': req.body }) //trás os dados
    })

    router.post('/', (req, res) => {
    res.send({ 'Vc fez uma requisição POST': req.body }) //adiciona os dados
    })

    router.patch('/', (req, res) => {
    res.send({ 'Vc fez uma requisição PATCH': req.body }) //edita os dados
    })

    router.delete('/', (req, res) => {
    res.send({ 'Vc fez uma requisição DELETE': req.body }) //deleta os dados
    })

    module.exports = router
}



