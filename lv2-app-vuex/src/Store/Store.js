import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    headerText: "To-Do List!",
    todoList: [{text: '1', done: false}],
  },
  mutations: {
    // ...
  },
});