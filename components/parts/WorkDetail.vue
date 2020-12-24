<template lang="pug">
.work-detail
  .d-flex
    .work-photo(v-lazy:background-image="post.fields.photo.fields.file.url")
    .work-photo(v-lazy:background-image="post.fields.photo.fields.file.url")
  .work-content
    .work-title xxxカット
    .work-description
      p xxxxにこだわり、xxxを表現しました。
      p xxxxにこだわり、xxxを表現しました。
      p xxxxにこだわり、xxxを表現しました。
</template>

<script>
import descriptionParserMixin from "@/components/mixins/descriptionParserMixin";

export default {
  mixins: [descriptionParserMixin],
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.work-detail
  width: 100%
  max-width: 600px
  .work-photo
    width: 50%
    background-size: cover
    background-position: center center
    padding-bottom: 50%
  .work-content
    width: 100%
    background-color: white
    padding: 20px
    position: relative
    .work-title
      text-align: center
      font-size: 20px
      font-weight: bold
      margin-bottom: 10px
    .work-description
      font-size: 16px
@include media-breakpoint-down(md)
  .work-detail
    display: block
    width: 90%
    height: auto
</style>