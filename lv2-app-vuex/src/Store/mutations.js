const addTodo = (state, text) => {
  if (!text) {
    state.isModalOn = true;
  }
  else {
    const newItem = {
      text,
      done: false,
    }
    state.todoList.push(newItem);
  }
}

const toggleDoneTodo = (s, idx) => {
  s.todoList[idx].done = !s.todoList[idx].done;
}

const removeTodo = (s, idx) => {
  s.todoList.splice(idx, 1);
}

const clearTodos = (s) => {
  s.todoList = [];
}

const saveTodos = (s) => {
  sessionStorage.setItem('todos', JSON.stringify(s.todoList));
}

const toggleModal = (state, bool) => {
  state.isModalOn = bool;
}

export { addTodo, toggleDoneTodo, removeTodo, clearTodos, saveTodos, toggleModal };