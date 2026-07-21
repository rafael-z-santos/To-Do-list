import "./Form.css";

export default function Form({ isOpen, fechaForm }) {
    if (isOpen) {
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <button className="fechar" onClick={fechaForm}>
                        ✕
                    </button>

                    <form className="form-tarefa">
                        <h2>Nova Lista de Tarefas</h2>

                        <div className="campo">
                            <label htmlFor="titulo">Título</label>
                            <input
                                type="text"
                                id="titulo"
                                placeholder="Digite o título da lista de tarefas"
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea
                                id="descricao"
                                rows="5"
                                placeholder="Descreva a lista de tarefas"
                            ></textarea>
                        </div>

                        <div className="campo">
                            <label htmlFor="prioridade">Prioridade</label>
                            <select id="prioridade">
                                <option>Baixa</option>
                                <option>Média</option>
                                <option>Alta</option>
                                <option>Urgente</option>
                            </select>
                        </div>

                        <button type="submit">
                            Adicionar Lista de Tarefas
                        </button>
                    </form>
                </div>
            </div>
        );
    }
    return null;
}