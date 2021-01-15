<template lang="pug">
.owner
  .content(v-html="profile")
  .text-center.pt-5
    a.owner-blog-link(href="http://s2hairs2.blog.fc2.com", target="new")
      strong オーナーのブログはコチラ
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
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
  },
};
</script>

<style lang="sass" scoped>
.owner-blog-link
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