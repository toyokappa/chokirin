<template lang="pug">
.welcome
  .page-top(v-lazy:background-image="topImage")
    .title-area
      .title 美容室chokirin
      .subtitle クセ毛・ダメージお悩みを解決に
      .subtitle 《１日４名様限定》
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
  &:after
    content: ''
    width: 100%
    background-color: rgba(0, 0, 0, 0.2)
    position: absolute
    top: 0
    left: 0
    @include media-breakpoint-up(lg)
      height: calc(100vh - 100px)
    @include media-breakpoint-down(md)
      height: calc(100vh - 50px)
  .title-area
    position: absolute
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
    color: white
    font-family: $en-accent-family
    text-align: center
    width: 100%
    margin: auto
    z-index: 100
    @include media-breakpoint-up(sm)
      .title
        font-size: 60px
        font-weight: bold
        letter-spacing: 5px
      .subtitle
        font-size: 24px
        letter-spacing: 3px
    @include media-breakpoint-down(xs)
      .title
        font-size: 36px
        font-weight: bold
        letter-spacing: 5px
      .subtitle
        font-size: 16px
        letter-spacing: 3px
</style>