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
