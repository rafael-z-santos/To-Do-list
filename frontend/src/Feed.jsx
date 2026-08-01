import { useEffect, useState } from 'react';
import './Feed.css';

function Feed({ mostrarFormCard }) {
    const [listas, setListas] = useState([]);

    useEffect(() => {
        async function listarFeed() {
            try {
                const resposta = await fetch("http://localhost:3001/listas");

                if (!resposta.ok) {
                    throw new Error("Falha ao buscar as listas");
                }

                const dados = await resposta.json();
                setListas(dados);
            } catch (error) {
                console.error("Erro ao listar feed:", error);
            }
        }

        listarFeed();
    }, []);

    return (
        <div className="cards">
            {listas.length > 0 ? (
                listas.map((lista) => (
                    <div
                        className="todo-card"
                        key={lista.id}
                        style={{ "--card-accent": lista.cor || "#7c3aed" }}
                    >
                    <div className="todo-header">
                        <h3>{lista.nome}</h3>
                        <p>{lista.descricao || "Sem descrição"}</p>
                    </div>

                    <div className="todo-empty">
                        <p className="todo-empty-title">Lista disponível</p>
                        <p className="todo-empty-text">
                            Conteúdo pronto para ser exibido aqui.
                        </p>
                    </div>

                    <button onClick={mostrarFormCard} className="add-task">+ Nova Atividade</button>
                </div>
                ))
            ) : null}
        </div>
    );
}

export default Feed;