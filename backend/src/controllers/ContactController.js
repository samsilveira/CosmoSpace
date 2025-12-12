const messages = [];

module.exports = {
    // Rota GET: Listar mensagens 
    async index(req, res) {
        return res.json(messages);
    },

    // Rota POST: Criar mensagem 
    async store(req, res) {
        const { nome, email, mensagem } = req.body;

        // Validação básica no Backend [cite: 175]
        if (!nome || !email || !mensagem) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        const newMessage = {
            id: messages.length + 1,
            nome,
            email,
            mensagem,
            dataHora: new Date()
        };

        messages.push(newMessage);

        return res.status(201).json({
            success: true,
            data: newMessage
        });
    }
};