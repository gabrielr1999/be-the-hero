const express = require('express');//importando as funcionalidades do express
const cors = require('cors');
const routes = require('./routes');

const app = express(); //variavels que armazena a aplicação

app.use(cors());
app.use(express.json()); // eu to falando para o express ir para o corpo da requisição e converter o json em um objeto do JavaScript
app.use(routes);

app.listen(3333);