<template lang="pug">
.reserve--button
  n-link.reserve-link(to="/blogs")
    strong ご予約はコチラ
    fa.ml-2(:icon="faAngleDoubleRight")
</template>

<script>
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      faAngleDoubleRight,
    };
  },
};
</script>

<style lang="sass" scoped>
.reserve-link
  color: black
  font-family: $en-accent-family
  background-color: white
  padding: 15px 20px
  border: 2px solid black
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