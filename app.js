window.onload = function() {
    loadTasks();
};

function addTask() {
    const input = document.getElementById('new-task-input');
    const newTask = input.value;
    if (newTask) {
        const tasksList = document.getElementById('tasks-list');
        const li = document.createElement('li');
        li.textContent = newTask;
        tasksList.appendChild(li);
        saveTasks();
        input.value = "";
    }
}

function saveTasks() {
    const tasksList = document.getElementById('tasks-list');
    let tasks = [];
    for (let i = 0; i < tasksList.children.length; i++) {
        tasks.push(tasksList.children[i].textContent);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        const tasksList = document.getElementById('tasks-list');
        tasks.forEach(function(task) {
            const li = document.createElement('li');
            li.textContent = task;
            tasksList.appendChild(li);
        });
    }
}
function clearTasks() {
    const tasksList = document.getElementById('tasks-list');
    tasksList.innerHTML = '';
}
