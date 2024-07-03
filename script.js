const taskList = document.querySelector(".task-list");
const newTaskInput = document.getElementById("new-task");
let tasks = [];

function addTask() {
  const newTask = newTaskInput.value.trim();
  if (newTask !== "") {
    tasks.push({
      id: Date.now(),
      text: newTask,
      completed: false,
    });
    renderTasks();
    newTaskInput.value = "";
  }
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
          <span>${task.text}</span>
          <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
        `;
    taskList.appendChild(taskItem);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function clearTasks() {
  tasks = [];
  renderTasks();
}
