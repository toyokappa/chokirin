<template lang="pug">
.owner
  .content(v-html="profile")
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
  },
};
</script>