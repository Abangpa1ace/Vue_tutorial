<template>
  <div id="main">
    <!-- {{ str }}
    <AppHeader :text="head" @send="changeHead"></AppHeader> -->
    <Form />
  </div>
</template>

<script>
// import AppHeader from './components/AppHeader';
import Form from './components/Form';

export default {
  components: {
    // AppHeader,
    Form,
  },
  data() {
    return {
      head: 'Header TExt!'
    }
  },
  methods: {
    changeHead(text) {
      this.head = text;
    }
  },
}
</script>

<style lang="css">

body {
  padding: 80px;
  background: #f4f4f4;
}

</style>