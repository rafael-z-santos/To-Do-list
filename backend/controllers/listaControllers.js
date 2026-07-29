const db = require("../db"); //importa o db que tem a conexão com o banco de dados

async function criarLista(req, res) {
    //req (request) → contém os dados enviados pelo React.
    //res (response) → é usado para responder ao React.

    try {
        const { nome, descricao } = req.body; //constante com od dados enviados pelo React (nome e descrição da lista)

        const resultado = await db.query(
            `INSERT INTO lista (nome, descricao)
             VALUES ($1, $2)
             RETURNING *`,
            [nome, descricao]
        ); // Insere a nova lista no banco de dados

        res.status(201).json(resultado.rows[0]);

     } catch (error) {
        console.error("Erro ao criar lista:", error);
        res.status(500).json({ error: "Erro ao criar lista" });
     }
}

module.exports = {
    criarLista
};