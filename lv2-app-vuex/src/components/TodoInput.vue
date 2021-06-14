<template>
  <div class="inputBox shadow">
    <input 
      type="text"
      v-model="inputValue"
      @keyup.enter="submitInput">
    <span class="addContainer"
      @click="submitInput"
    >
      +
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      inputValue: "",
    }
  },
  methods: {
    ...mapMutations(['addTodo']),
    submitInput() {
      this.addTodo(this.inputValue);
      this.clearInput()
    },
    clearInput() {
      this.inputValue = "";
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  width: 80%;
  padding: 0 30px;
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.addBtn {
  color: #fff;
  vertical-align: middle;
}

</style>