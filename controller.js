function handleAddTask() {
  const taskInput = prompt("Enter a new task:");
  if (taskInput) {
    addTodo(taskInput);
    updateTodoList();
  }
}

function handleDeleteTask(event) {
  var deleteBtn = event.target.closest(".delete");

  if (deleteBtn) {
    var index = deleteBtn.getAttribute("data-index");
    removeTodo(index);
    updateTodoList();
  }
}

function handleToggleCompletion(event) {
  const checkbox = event.target.closest(".todo-checkbox");

  if (checkbox) {
    const index = checkbox.dataset.index;
    toggleTodoCompletion(index);
    updateTodoList();
  }
}

function todoClicked(event) {
  handleToggleCompletion(event);
  handleDeleteTask(event);
}

function initializeApp() {
  const addBtn = document.querySelector(".add-task");
  addBtn.addEventListener("click", handleAddTask);

  var todoList = document.getElementById("todo-list");
  todoList.addEventListener("click", todoClicked);

  // ✅ Render todos loaded from localStorage
  updateTodoList();

  document.getElementById("show-all").addEventListener("click", function () {
    updateTodoList("all");
  });

  document.getElementById("show-done").addEventListener("click", function () {
    updateTodoList("done");
  });

  document.getElementById("show-undone").addEventListener("click", function () {
    updateTodoList("undone");
  });
}

// Wait for DOM to be ready
window.addEventListener("DOMContentLoaded", initializeApp);
