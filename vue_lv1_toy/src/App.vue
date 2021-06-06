<template>
  <div>
    {{ str }}
    <AppHeader 
      :text="head"
      @send="changeHead">
    </AppHeader>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  components: {
    AppHeader,
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

<style lang="scss" scoped>

</style>