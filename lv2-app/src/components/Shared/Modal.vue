<template>
  <div class="modal-container" :class="{ show: isModalOn }">
    <div
      class="modal-content shadow">
      <ModalAlert></ModalAlert>
      <span class="modal-close-btn" @click="$emit('close')">X</span>
    </div>
  </div>
</template>

<script>
import ModalAlert from './ModalAlert.vue'

export default {
  name: "Modal",
  props: {
    isModalOn: {
      type: Boolean,
    },
    closeModal: {
      type: Function,
    }
  },
  components: {
    ModalAlert,
  },
}
</script>

<style scoped>
.modal-container {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(7, 99, 69, 0.2);
}

.modal-container.show {
  display: flex;
}

.modal-content {
  position: relative;
  min-width: 300px;
  min-height: 200px;
  padding: 30px;
  background: #fff;
  border-radius: 10px;
}

.modal-close-btn {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 18px;
  cursor: pointer;
}

</style>