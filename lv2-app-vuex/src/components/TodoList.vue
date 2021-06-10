<template>
  <div class="todo-list">
    <transition-group name="list" tag="ul">
      <li 
        class="shadow"
        v-for="(todo, idx) in this.$store.state.todoList" :key="todo">
          <span
          class="checkBtn"
          :class="{ checkBtnCompleted: todo.done }"
          @click="toggleDoneTodo(idx)">
          V
        </span>
        <span
          :class="{ textCompleted: todo.done }">
          {{ todo.text }}
        </span>
        <span 
          class="removeBtn"
          @click="removeTodo(idx)">
          X
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDoneTodo(idx) {
      this.$store.commit("toggleDoneTodo", idx)
    },
    removeTodo(idx) {
      this.$store.commit("removeTodo", idx)
    }
  }
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

.list-enter-active, .list-leave-active {
  transition: all .5s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>