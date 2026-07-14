import "./Menu.css";

// recebe as funções mostrarLista e mostrarFormulario como parametros
function Menu({ mostrarForm }) {
    return (
        <nav>
            <h1>Lista de Tarefas</h1>

            <ul>
                <li>
                    <button onClick={mostrarForm}>
                        Add+
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;