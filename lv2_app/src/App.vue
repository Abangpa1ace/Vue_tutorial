<template>
  <div id="App">
    <TodoHeader></TodoHeader>
    <TodoInput 
      :addTodo="addTodo">
    </TodoInput>
    <TodoList 
      :todos="todos"
      :removeTodo="removeTodo">
    </TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: "App",
  components: {
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
  methods: {
    addTodo(text) {
      const newItem = {
        text,
        done: false,
      }
      this.todos.push(newItem);
    },
    removeTodo(idx) {
      this.todos.splice(idx, 1);
    },
    saveTodos() {
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    }
  },
  mounted() {
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