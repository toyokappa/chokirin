<template lang="pug">
.about
  .container
    .row
      .col-lg-6.order-lg-2.mb-sx-3
        img(v-lazy="aboutImage")
      .col-lg-6.order-lg-1.no-center-content(v-html="about")
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["about", "aboutImage"]),
  },
};
</script>

<style lang="sass" scoped>
.about
  font-size: 16px
  letter-spacing: 2px
  line-height: 1.7
  img
    width: 100%
@media screen and (max-width: 480px)
  .about
    img
      margin-bottom: 20px
</style>