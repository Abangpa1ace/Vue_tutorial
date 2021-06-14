import Vue from 'vue'
import App from './App.vue';
import { store } from './Store/Store';

Vue.config.productionTip = false

new Vue({
  store,
  mounted() {
    this.$store.watch(() => this.$store.commit('saveTodos'))
  },
  render: h => h(App),
}).$mount('#app')
