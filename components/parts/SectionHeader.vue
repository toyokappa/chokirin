<template lang="pug">
.section-header
  .section-logo
    img(v-lazy="logo", :class="{ 'logo-lg': logoSize == 'lg' }")
  .section-title(:style="`color: ${titleColor};`") {{ title }}
  .section-subtitle(:style="`color: ${subtitleColor};`") {{ subtitle }}
  .section-description {{ description }}
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
    },
    logoSize: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    titleColor: {
      type: String,
      default: "black",
    },
    subtitleColor: {
      type: String,
      default: "black",
    },
  },
};
</script>

<style lang="sass" scoped>
.section-header
  text-align: center
  .section-logo
    margin-bottom: 20px
  .section-title
    font-family: $ja-accent-family
    letter-spacing: 5px
    margin-bottom: 0
  .section-subtitle
    font-family: $en-accent-family
    font-weight: normal
    letter-spacing: 4px
    margin-bottom: 30px
  .section-description
    color: $secondary-grey
    font-size: 16px
    font-weight: normal
    letter-spacing: 3px
@include media-breakpoint-up(sm)
  .section-header
    margin-top: 50px
    padding-top: 50px
    padding-bottom: 80px
    .section-logo
      img
        width: 80px
        &.logo-lg
          width: 150px
    .section-title
      font-size: 40px
    .section-subtitle
      font-size: 20px
    .section-description
      font-size: 16px
@include media-breakpoint-down(xs)
  .section-header
    margin-top: 20px
    padding-top: 20px
    padding-bottom: 50px
    .section-logo
      img
        width: 60px
        &.logo-lg
          width: 120px
    .section-title
      font-size: 30px
    .section-subtitle
      font-size: 16px
    .section-description
      font-size: 14px
      padding: 0 10px
</style>