const fs = require('fs');
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json", "utf-8"));

const novoLivro = {
    "id": 3,
    "titulo": "O Hobbit",
    "autor": "J.R.R. Tolkien",
    "ano": 1937
};

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoLivro]), "utf-8");

console.log(fs.readFileSync("livros.json", "utf-8"));