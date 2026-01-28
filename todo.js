// Your current todos array
let todos = [];

// Load todos from localStorage at the start
function loadTodos() {
  const stored = localStorage.getItem("todos");
  if (stored) {
    todos = JSON.parse(stored);
  }
}

// Save the current todos array to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Return the todos array
function getTodos() {
  return todos;
}

// Add a new todo
function addTodo(task) {
  todos.push({
    task: task,
    completed: false,
  });
  saveTodos(); // save after adding
}

// Remove a todo by index
function removeTodo(index) {
  todos.splice(index, 1);
  saveTodos(); // save after removing
}

// Toggle completion status
function toggleTodoCompletion(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos(); // save after toggling
}

// Load todos when the app starts
loadTodos();
