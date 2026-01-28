function clearList() {
  var todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
}

function updateTodoList(filter = "all") {
  clearList();
  var todoList = document.getElementById("todo-list");

  getTodos().forEach(function (todo, index) {
    // Check filter
    if (filter === "done" && !todo.completed) return;
    if (filter === "undone" && todo.completed) return;

    var taskItem = createTaskElement(todo.task, index, todo.completed);
    todoList.appendChild(taskItem);
  });

  console.log("Todo list updated:", getTodos());
}

function createTaskElement(task, index, completed) {
  const taskItem = document.createElement("div");
  taskItem.dataset.index = index;
  taskItem.className = "task-item";
  taskItem.innerHTML = `
    <div class="item">
      <input class="todo-checkbox" type="checkbox" data-index="${index}" id="task${index}" ${completed ? " checked" : ""}/>
      <label for="task${index}">${task}</label>
    </div>
    <div class="delete">
      <img src="./assets/delete_icon.png" alt="delete icon" />
    </div>
  `;
  return taskItem;
}

function displayDoneTasks() {
  const doneTasks = getTodos().filter((todo) => todo.completed);
}
