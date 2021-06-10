<template>
  <div id="App">
    <Modal
      :isModalOn="isModalOn"
      @close="closeModal">
    </Modal>
    <TodoHeader></TodoHeader>
    <TodoInput 
      :addTodo="addTodo">
    </TodoInput>
    <TodoList 
      :todos="todos" :toggleDoneTodo="toggleDoneTodo" :removeTodo="removeTodo">
    </TodoList>
    <TodoFooter
      :clearTodos="clearTodos">
    </TodoFooter>
  </div>
</template>

<script>
import Modal from './components/Shared/Modal.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: "App",
  components: {
    Modal,
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todos: [],
      isModalOn: false,
    }
  },
  watch: {
    todos: function() {
      this.saveTodos()
    }
  },
  methods: {
    closeModal() {
      console.log('hi')
      this.isModalOn = false;
    },
    addTodo(text) {
      if (!text) {
        this.isModalOn = true;
      }
      else {
        const newItem = {
          text,
          done: false,
        }
        this.todos.push(newItem);
      }
    },
    toggleDoneTodo(idx) {
      this.todos[idx].done = !this.todos[idx].done;
      this.saveTodos()
    },
    removeTodo(idx) {
      this.todos.splice(idx, 1);
    },
    clearTodos() {
      this.todos = [];
    },
    saveTodos() {
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    }
  },
  created() {
    const savedTodos = sessionStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
    // if (this.$store.state.todoList) {
    //   this.todos = this.$store.state.todoList
    // }
  }
}
</script>

<style>

body {
  padding: 60px;
  text-align: center;
  background: #f6f6f6;
}

#App {
  width: 600px;
  margin: 0 auto;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}


</style>