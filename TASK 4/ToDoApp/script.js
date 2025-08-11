let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        list.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">Delete</button></li>`;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const task = document.getElementById("taskInput").value;
    if (task) {
        tasks.push(task);
        document.getElementById("taskInput").value = "";
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();
