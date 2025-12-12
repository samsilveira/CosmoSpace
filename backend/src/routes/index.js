const express = require('express');
const routes = express.Router();
const ContactController = require('../controllers/ContactController');

// Definição de rotas
routes.get('/api/messages', ContactController.index);
routes.post('/api/contact', ContactController.store);

// Rota de status
routes.get('/api/status', (req, res) => {
    res.json({ status: "CosmoSpace API Online", timestamp: new Date() });
});

module.exports = routes;