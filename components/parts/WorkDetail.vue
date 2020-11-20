<template lang="pug">
.work-detail
  .work-photo(v-lazy:background-image="post.fields.photo.fields.file.url")
  .work-content
    .work-name {{ post.fields.name }}
    .work-profile {{ post.fields.profile }}
    .work-comment {{ parseDescription(post.fields.voice) }}
    .work-date {{ post.fields.postedAt }}
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
  max-width: 800px
  height: 400px
  display: flex
  .work-photo
    width: 100%
    max-width: 400px
    background-color: #c4c4c4
    background-size: cover
    background-position: center center
  .work-content
    width: 100%
    max-width: 400px
    background-color: white
    padding: 20px
    position: relative
    .work-name
      font-size: 20px
      font-weight: bold
      text-align: center
      margin-bottom: 10px
    .work-profile
      font-size: 16px
      text-align: center
      margin-bottom: 30px
    .work-comment
      font-size: 16px
      line-height: 1.8
    .work-date
      font-size: 14px
      position: absolute
      right: 20px
      bottom: 20px
</style>