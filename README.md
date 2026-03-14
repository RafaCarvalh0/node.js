# Repositório de Estudo - Node.js

Passo a passo para iniciar um projeto Node.js com Express.

## 1. Iniciar o projeto
```bash
npm init -y
```

## 2. Instalar o Express
```bash
npm install express
```

## 3. Criar o `app.js`
Crie na raiz do projeto:
```javascript
const express = require("express")
const app = express()
const port = 8000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
```

## 4. Instalar o Nodemon
```bash
npm install nodemon
```

## 5. Configurar o `package.json`
Adicione o comando de desenvolvimento dentro da tag `"scripts"`:
```json
"scripts": {
  "dev": "nodemon app.js"
}
```

## 6. Executar o projeto
```bash
npm run dev
```