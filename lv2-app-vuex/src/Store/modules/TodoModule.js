const savedTodos = sessionStorage.getItem('todos');

const state = {
  headerText: "To-Do List!!!",
  todoList: savedTodos ? JSON.parse(savedTodos) : [],
  isModalOn: false,
}

const getters = {
  // no getters
}

const mutations = {
  addTodo(state, text) {
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
  },
  toggleDoneTodo(s, idx) {
    s.todoList[idx].done = !s.todoList[idx].done;
  },
  removeTodo(s, idx) {
    s.todoList.splice(idx, 1);
  },
  clearTodos(s) {
    s.todoList = [];
  },
  saveTodos(s) {
    sessionStorage.setItem('todos', JSON.stringify(s.todoList));
  },
  toggleModal(state, bool) {
    state.isModalOn = bool;
  },
}

export default { 
  state,
  getters,
  mutations,
}