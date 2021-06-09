<template>
  <header>
    <h1>{{ text }}</h1>
    <button @click="sendMsg">send</button>
  </header>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: "",
      }
    },
    methods: {
      sendMsg() {
        this.$emit('send', "New Header!!")
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>