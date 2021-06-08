<template>
  <ul class="todo-list">
    <li 
      v-for="(todo, idx) in todos" 
      class="shadow"
      :key="idx"
      >
      {{ todo }}
      <span 
        class="removeBtn"
        @click="removeTodo(idx)">
        X
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
    },
    removeTodo: {
      type: Function,
    }
  },
}
</script>

<style scoped>
ul {
  width: 400px;
  margin: 30px auto;
  list-style: none;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: #fff;
  border-radius: 5px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
  font-weight: bold;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
  font-weight: bold;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

span {
  cursor: pointer;
}

</style>