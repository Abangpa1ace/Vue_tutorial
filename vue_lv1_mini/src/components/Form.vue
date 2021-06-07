<template>
  <form @submit.prevent="submitInfo">
    <div>
      <label for="userId">id: </label>
      <input 
        name="userId" 
        type="text"
        v-model="id">
    </div>
    <div>
      <label for="userPw">pw: </label>
      <input 
        name="userPw" 
        type="password"
        v-model="pw">
    </div>
    <button 
      type="submit"
      >login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: '',
      pw: '',
    }
  },
  methods: {
    submitInfo() {
      // e.preventDefault();
      const url = 'https://jsonplaceholder.typicode.com/users'
      axios.post(url, {username: this.id, password: this.pw})
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }
}
</script>

<style lang="scss" scoped>

</style>