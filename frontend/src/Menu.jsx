import "./Menu.css";

// recebe a função mostrarFormulario como parametros
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