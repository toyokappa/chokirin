<template lang="pug">
.photo-tile
  .container
    .row.row-3
      .col-sm-3.col-4.mb-3(v-for="post in posts", :key="post.sys.id")
        .photo(
          v-lazy:background-image="post.fields.photo.fields.file.url",
          @click="openModal(post)"
        )
      .col-sm-3.col-4.mb-3(v-for="n in 12 - posts.length", :key="n")
        .no-photo
  m-modal(ref="modal")
    p-work-detail(:post="currentPost")
</template>

<script>
import MModal from "@/components/modules/Modal";
import PWorkDetail from "@/components/parts/WorkDetail";

export default {
  components: {
    MModal,
    PWorkDetail,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPost: {},
    };
  },
  methods: {
    openModal(post) {
      this.currentPost = post;
      this.$refs.modal.openModal();
    },
  },
};
</script>

<style lang="sass" scoped>
.photo-tile
  .photo, .no-photo
    width: 100%
    padding-bottom: 100%
  .photo
    background-size: cover
    background-position: center center
    cursor: pointer
  .no-photo
    background-color: $muted-color
.row-3
  margin-left: -0.5rem
  margin-right: -0.5rem
  > div
    padding-left: 0.5rem
    padding-right: 0.5rem
</style>