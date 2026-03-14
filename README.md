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

## 3. Instalar o Nodemon
```bash
npm install nodemon
```

## 4. Configurar o `package.json`
Adicione o comando de desenvolvimento dentro da tag `"scripts"`:
```json
"scripts": {
  "dev": "nodemon app.js"
}
```

## 5. Executar o projeto
```bash
npm run dev
```