<template lang="pug">
.welcome
  #pageTop.page-top(v-lazy:background-image="topImage")
</template>

<script>
import topImage from "@/assets/images/pagetop.jpg";
import logo from "@/assets/images/logo.svg";
import GHeader from "@/components/global/Header";

export default {
  components: {
    GHeader,
  },
  data() {
    return {
      topImage,
      logo,
    };
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