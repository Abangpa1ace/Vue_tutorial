<template>
  <div id="App">
    <Modal></Modal>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList :toggleDoneTodo="toggleDoneTodo" :removeTodo="removeTodo">
    </TodoList>
    <TodoFooter></TodoFooter>
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
    }
  },
  watch: {
    todos: function() {
      this.saveTodos()
    }
  },
  created() {
    const savedTodos = sessionStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
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