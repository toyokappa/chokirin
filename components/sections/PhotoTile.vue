<template lang="pug">
.photo-tile
  .container
    .row.row-3
      .col-sm-3.col-4.mb-3
        .photo(@click="openModal()")
      .col-sm-3.col-4.mb-3
        .photo
      .col-sm-3.col-4.mb-3
        .photo
      .col-sm-3.col-4.mb-3
        .photo
      .col-sm-3.col-4.mb-3
        .photo
      .col-sm-3.col-4.mb-3
        .photo
      .col-sm-3.col-4.mb-3
        .photo
      .col-sm-3.col-4.mb-3
        .photo
      .col-sm-3.col-4.mb-3
        .photo
      .col-sm-3.col-4.mb-3
        .photo
      .col-sm-3.col-4.mb-3
        .photo
      .col-sm-3.col-4.mb-3
        .photo
  m-modal(v-if="modalFlag", @closeModal="closeModal")
    .work-detail
      .work-photo
      .work-content
        .work-name
          | みゆさん
        .work-profile
          | 20代後半女性（主婦）
        .work-comment
          | 今日も縮毛矯正をしてもらいました。通いはじめてもうじき2年になりますが、毎回丁寧にしてくれます（＾ω＾）仕上がりも満足です。髪の量が多く癖なのですが、持ちも良いです。ありがとうございました！
        .work-date
          | 2018.09.14
</template>

<script>
import MModal from "@/components/modules/Modal";

export default {
  components: {
    MModal,
  },
  data() {
    return {
      modalFlag: false,
    };
  },
  methods: {
    openModal() {
      this.modalFlag = true;
    },
    closeModal() {
      this.modalFlag = false;
    },
  },
};
</script>

<style lang="sass" scoped>
.photo-tile
  .photo
    width: 100%
    padding-bottom: 100%
    background-color: #c4c4c4
    cursor: pointer
  .work-detail
    width: 100%
    max-width: 800px
    height: 400px
    display: flex
    .work-photo
      width: 100%
      max-width: 400px
      background-color: #c4c4c4
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
.row-3
  margin-left: -0.5rem
  margin-right: -0.5rem
  > div
    padding-left: 0.5rem
    padding-right: 0.5rem
</style>