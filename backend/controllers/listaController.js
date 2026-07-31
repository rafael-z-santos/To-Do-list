const db = require("../db"); //importa o db que tem a conexão com o banco de dados

async function criarLista(req, res) {
    //req (request) → contém os dados enviados pelo React.
    //res (response) → é usado para responder ao React.

    try {
        const { nome, descricao, cor } = req.body; //constante com od dados enviados pelo React (nome, descrição e cor da lista)

        const resultado = await db.query(
            `INSERT INTO lista (nome, descricao, cor)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [nome, descricao, cor]
        ); // Insere a nova lista no banco de dados

        res.status(201).json(resultado.rows[0]);

     } catch (error) {
        console.error("Erro ao criar lista:", error);
        res.status(500).json({ error: "Erro ao criar lista" });
     }
}

async function listarListas(req, res) {
    try{
        const resultado = await db.query(
            "SELECT * FROM lista ORDER BY id DESC"
        );
        res.json(resultado.rows);
    }catch(error){
        console.error("Erro ao listar listas:", error);
        res.status(500).json({ error: "Erro ao listar listas" });
    }
}

module.exports = {
    criarLista,
    listarListas
};