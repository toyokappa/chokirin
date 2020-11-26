<template lang="pug">
.last-message
  .content(v-html="lastMessage")
  p-reserve-button
</template>

<script>
import pReserveButton from "@/components/parts/ReserveButton";

export default {
  components: {
    pReserveButton,
  },
  computed: {
    lastMessage() {
      return this.$store.getters.lastMessage;
    },
  },
};
</script>

<style lang="sass" scoped>
.last-message
  text-align: center
  .content
    color: white
    margin-bottom: 80px
</style>