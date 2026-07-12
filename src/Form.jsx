import './Form.css'

function Form() {
    return (
            <form className="form-tarefa">
            <h2>Nova Tarefa</h2>

            <div className="campo">
                <label htmlFor="titulo">Título</label>
                <input
                    type="text"
                    id="titulo"
                    placeholder="Digite o título da tarefa"
                />
            </div>

            <div className="campo">
                <label htmlFor="descricao">Descrição</label>
                <textarea
                    id="descricao"
                    rows="5"
                    placeholder="Descreva a tarefa"
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

            <div className="campo">
                <label htmlFor="data">Data de realização/entrega</label>
                <input
                    type="date"
                    id="data"
                />
            </div>

            <button type="submit">Adicionar Tarefa</button>
        </form>
    )
}

export default Form;