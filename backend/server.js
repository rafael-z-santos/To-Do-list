const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

const listaRoutes = require("./routes/listaRoutes");

dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();

app.use(cors());
app.use(express.json());

app.use("/listas", listaRoutes);

const db = require("./db");
const PORT = process.env.PORT || 3001;

app.get("/", async (req, res) => {
try {
    const resultado = await db.query("SELECT NOW()");
    res.json({ ok: true, resultado: resultado.rows });
} catch (erro) {
    console.error(erro);
    res.status(500).json({
        erro: erro.message,
        codigo: erro.code
    });
}
});

app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});