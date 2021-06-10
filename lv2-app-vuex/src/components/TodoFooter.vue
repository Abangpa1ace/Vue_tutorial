<template>
  <footer class="clearAllContainer shadow">
    <span 
      class="clearAllBtn"
      @click="clearTodos">
      Clear All!
    </span>
  </footer>
</template>

<script>
  export default {
    name: 'TodoFooter',
    methods: {
      clearTodos() {
        this.$store.commit("clearTodos")
      }
    }
  }
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background: #fff;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: block;
  font-weight: bold;
}

span {
  cursor: pointer;
}

</style>