<template lang="pug">
transition(name="modal", appear, v-if="modalFlag")
  .modal-overlay(@click="closeModal")
    slot
</template>

<script>
export default {
  data() {
    return {
      modalFlag: false,
    };
  },
  methods: {
    openModal() {
      this.modalFlag = true;
    },
    closeModal(event) {
      if (event.target.classList.contains("modal-overlay")) {
        this.modalFlag = false;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.modal-overlay
  display: flex
  align-items: center
  justify-content: center
  position: fixed
  z-index: 1050
  top: 0
  left: 0
  height: 100%
  width: 100%
  background-color: rgba(0, 0, 0, 0.7)

// transition
.modal-enter-active, .modal-leave-active
  transition: opacity 0.3s
  & > div
    transition: opacity 0.3s, transform 0.4s
.modal-leave-active
  transition: opacity 0.6s ease 0.4s
.modal-enter, .modal-leave-to
  opacity: 0
  & > div
    opacity: 0
    transform: translateY(-20px)
</style>