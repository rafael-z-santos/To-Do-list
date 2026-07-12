import './Menu.css'

function Menu() {
    return (
       <nav>
            <h1>Lista de Tarefas</h1>
            <ul>
                <li><a href="/about">Tarefas</a></li>
                <li><a href="/contact">Adicionar Tarefa</a></li>
            </ul>
       </nav>
    )
}

export default Menu;