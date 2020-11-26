<template lang="pug">
.welcome
  .page-top(v-lazy:background-image="topImage")
</template>

<script>
import GHeader from "@/components/global/Header";

export default {
  components: {
    GHeader,
  },
  computed: {
    topImage() {
      return this.$store.getters.topImage;
    },
  },
};
</script>

<style lang="sass" scoped>
.welcome
  @include media-breakpoint-up(lg)
    margin-top: 100px
  @include media-breakpoint-down(md)
    margin-top: 50px
.page-top
  position: relative
  width: 100%
  background-size: cover
  background-position: center center
  @include media-breakpoint-up(lg)
    height: calc(100vh - 100px)
  @include media-breakpoint-down(md)
    height: calc(100vh - 50px)
</style>