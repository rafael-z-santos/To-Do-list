import { useState } from "react";

import "./Form.css";

export default function Form({ isOpen, fechaForm }) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [cor, setCor] = useState("#ff0000");

    if (isOpen) {
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <button className="fechar" onClick={fechaForm}>
                        ✕
                    </button>

                    <form className="form-tarefa" onSubmit={enviarFormulario}>
                        <h2>Nova Lista de Tarefas</h2>

                        <div className="campo">
                            <label htmlFor="titulo">Título</label>
                            <input
                                type="text"
                                id="titulo"
                                placeholder="Digite o título da lista de tarefas"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)} //atualiza as variavel titulo com o valor digitado no input
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea
                                id="descricao"
                                rows="5"
                                placeholder="Descreva a lista de tarefas"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="campo campo-cor">
                            <label htmlFor="cor">Cor da lista</label>

                            <label
                                className="color-picker-button"
                                htmlFor="cor"
                                style={{ backgroundColor: cor }}
                            />

                            <input
                                type="color"
                                id="cor"
                                value={cor}
                                onChange={(e) => setCor(e.target.value)}
                                className="hidden-color-input"
                            />
                        </div>

                        <button type="submit">
                            Adicionar Lista de Tarefas
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    async function enviarFormulario(event) {
        event.preventDefault(); //impede o comportamento padrão do formulário de recarregar a página

        try {
            const resposta = await fetch("http://localhost:3001/listas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: titulo,
                    descricao: descricao,
                    cor: cor
                })
            });

            const dados = await resposta.json();

            console.log(dados);

            setTitulo("");
            setDescricao("");
            setCor("#ff0000");

            fechaForm();

        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
        }
    }
    return null;
}
