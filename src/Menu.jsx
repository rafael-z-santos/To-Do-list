import "./Menu.css";

/* recebe as funções mostrarLista e mostrarFormulario como parametros*/
function Menu({ mostrarLista, mostrarFormulario }) {
    return (
        <nav>
            <h1>Lista de Tarefas</h1>

            <ul>
                <li>
                    /*Quando esse botão é clicado executa a função mostrarLista*/
                    <button onClick={mostrarLista}>
                        Tarefas
                    </button>
                </li>

                <li>
                    <button onClick={mostrarFormulario}>
                        Adicionar Tarefa
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;