<template lang="pug">
.work-detail
  .d-flex
    .work-photo
      .label Before
      .photo(v-lazy:background-image="post.fields.before.fields.file.url")
    .work-photo
      .label After
      .photo(v-lazy:background-image="post.fields.after.fields.file.url")
  .work-content
    .work-title {{ post.fields.title }}
    .work-description(v-html="parseDescription(post.fields.description)")
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
    width: 100%
    background-color: white
    .label
      font-size: 16px
      font-weight: bold
      text-align: center
      padding: 5px 0
    .photo
      width: 100%
      background-size: cover
      background-position: center center
      padding-bottom: 100%
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