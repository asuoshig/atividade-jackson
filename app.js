const fs = require('fs');

// Configuração
const config = JSON.parse(fs.readFileSync('config.json'));

// Banco de dados em memória
let tasks = [];

// Funções principais
function addTask(title) {
    tasks.push({ title, completed: false });
    console.log(`Tarefa adicionada: ${title}`);
}

function listTasks() {
    console.log("Tarefas:");
    tasks.slice(0, config.task_display_limit).forEach((task, index) => {
        console.log(`${index + 1}. [${task.completed ? "X" : " "}] ${task.title}`);
    });
}

function completeTask(index) {
    if (tasks[index]) {
        tasks[index].completed = true;
        console.log(`Tarefa "${tasks[index].title}" marcada como concluída.`);
    } else {
        console.log("Tarefa não encontrada.");
    }
}

module.exports = { addTask, listTasks, completeTask };

