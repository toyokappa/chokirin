<template lang="pug">
.first-message
  .content(v-html="firstMessage")
</template>

<script>
export default {
  computed: {
    firstMessage() {
      return this.$store.getters.firstMessage;
    },
  },
};
</script>

<style lang="sass" scoped>
.first-message
  text-align: center
</style>