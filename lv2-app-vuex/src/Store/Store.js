import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    headerText: "To-Do List!",
    todoList: [{ text: "1", done: false }],
    isModalOn: false,
  },
  mutations: {
    toggleModal(state, bool) {
      state.isModalOn = bool;
    },

    // Todo List 기능 전역 적용연습
    addTodo(state, text) {
      if (!text) {
        state.isModalOn = true;
      }
      else {
        const newItem = {
          text,
          done: false,
        }
        state.todoList.push(newItem);
      }
    },
  },
});