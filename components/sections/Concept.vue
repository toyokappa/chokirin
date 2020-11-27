<template lang="pug">
.concepts
  .container-fluid
    .row
      .offset-lg-2
      .col-lg-8
        .row
          .concept.col-sm-4.mb-lg-0.mb-5
            .person
              img(src="@/assets/images/hair1.svg")
            .catch
              | くせ毛カットへのこだわり
            .explain {{ cutConcept }}
          .concept.col-sm-4.mb-lg-0.mb-5
            .person
              img(src="@/assets/images/hair2.svg")
            .catch
              | カラーへのこだわり
            .explain {{ colorConcept }}
          .concept.col-sm-4.mb-lg-0.mb-5
            .person
              img(src="@/assets/images/hair3.svg")
            .catch
              | ダメージケアへのこだわり
            .explain {{ careConcept }}
  .recommend
    .icon
      img(src="@/assets/images/recommend.svg")
    .text
      div ダメージが気になる方必見
      div 【ケア・美髪エステメニュー】
      div オススメ致します！
  .content(v-html="recommend")
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cutConcept", "colorConcept", "careConcept", "recommend"]),
  },
};
</script>

<style lang="sass" scoped>
.concepts
  text-align: center
  .person
    margin-bottom: 20px
    img
      height: 100px
  .catch
    font-size: 18px
    font-weight: bold
    margin-bottom: 20px
  .explain
    font-size: 16px
    letter-spacing: 1px
    line-height: 2
  .recommend
    font-size: 20px
    font-weight: bold
    margin-top: 60px
    margin-bottom: 20px
    .icon
      margin-bottom: 20px
      img
        height: 100px
    .text
      div
        margin-bottom: 5px
</style>