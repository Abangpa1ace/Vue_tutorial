import Vue from 'vue'
import Vuex from 'vuex'
import TodoModule from './modules/TodoModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  TodoModule,
});