<template lang="pug">
.reserve-button
  .reserve-link(@click="$refs.modal.openModal()")
    strong ご予約・お問い合わせはコチラ
    fa.ml-2(:icon="faAngleDoubleRight")
  m-modal(ref="modal")
    p-salon-menu
</template>

<script>
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import MModal from "@/components/modules/Modal";
import PSalonMenu from "@/components/parts/SalonMenu";

export default {
  components: {
    MModal,
    PSalonMenu,
  },
  data() {
    return {
      faAngleDoubleRight,
    };
  },
};
</script>

<style lang="sass" scoped>
.reserve-link
  display: inline
  color: black
  font-family: $en-accent-family
  background-color: white
  padding: 15px 20px
  border: 2px solid black
  transition: 0.3s
  cursor: pointer
  &:hover
    color: white
    text-decoration: none
    background-color: black
  @include media-breakpoint-down(sm)
    .reserve-link
      font-size: 18px
  @include media-breakpoint-down(xs)
    .reserve-link
      font-size: 14px
</style>