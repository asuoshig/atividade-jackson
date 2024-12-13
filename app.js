fetch('config.json')
    .then(response => response.json())
    .then(data => {
        tasks.push(...data.tarefas);
        renderTasks();
    })
    .catch(error => console.error('Erro ao carregar JSON:', error));

const tasks = [];

// Adicionar Tarefa
document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const title = taskInput.value.trim();
    if (title) {
        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            titulo: title,
            descricao: '',
            status: 'pendente',
            prioridade: 'baixa',
            dataDeConclusao: ''
        };
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
});

// Renderizar Tarefas
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.titulo;
        if (task.status === 'concluida') {
            taskItem.classList.add('completed');
        }

        // Marcar como Concluída
        taskItem.addEventListener('click', () => {
            task.status = task.status === 'concluida' ? 'pendente' : 'concluida';
            renderTasks();
        });

        // Deletar Tarefa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); // não marca o item deletado como concluído
            tasks.splice(index, 1);
            renderTasks();
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}

renderTasks();
