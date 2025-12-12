const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Configurações
app.use(cors()); // Libera acesso para o front-end
app.use(express.json()); // Permite ler JSON no corpo das requisições POST
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});