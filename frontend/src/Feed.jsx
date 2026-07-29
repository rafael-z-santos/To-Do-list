import './Feed.css'

function Feed() {  
   return (
    <div class="todo-card">
        <div class="todo-header">
            <h3>Atividades da Semana</h3>
            <p>Organize suas tarefas</p>
        </div>

        <ul class="todo-list">
            <li class="todo-item">
                <div class="task-info">
                    <h4>Estudar CSS</h4>
                    <span>Prioridade: Alta</span>
                </div>
                <button class="edit-btn">✏️</button>
            </li>

            <li class="todo-item completed">
                <div class="task-info">
                    <h4>Fazer exercícios</h4>
                    <span>Concluída</span>
                </div>
                <button class="edit-btn">✏️</button>
            </li>

            <li class="todo-item">
                <div class="task-info">
                    <h4>Enviar relatório</h4>
                    <span>Data limite: 30/07/2026</span>
                </div>
                <button class="edit-btn">✏️</button>
            </li>
        </ul>

        <button class="add-task">+ Nova Atividade</button>
    </div>
   )
}

export default Feed;