import "./Menu.css";

// recebe a função mostrarFormulario como parametros
function Menu({ mostrarForm }) {
    return (
        <nav className="topbar">
            <div className="brand-area">
                <h1>Lista de Tarefas</h1>
                <p>Organize suas listas com mais praticidade</p>
            </div>

            <button type="button" className="menu-action" onClick={mostrarForm}>
                <span>＋</span>
                Adicionar lista
            </button>
        </nav>
    );
}

export default Menu;