<template lang="pug">
.about
  .container
    .row
      .col-lg-6.order-lg-2.mb-sx-3
        img(v-lazy="cutSample")
      .col-lg-6.order-lg-1
        section
          p chokirinはクセ毛・ダメージ・パサつきのお悩み解決を得意とした美容室です。
        section
          p くせ毛が得意ってどうゆう事？？
        section
          p 実は、クセがないストレートの髪とクセ毛の髪はカットの仕方や考え方が違うんです。クセ毛をストレートと同じ考え方でカットすると、まとまらなかったり、広がったりする可能性が高まります。
        section
          p くせ毛は何より【経験】が大切と考えています。
          p これまで数多くのくせ毛のお客様を担当しているので、もしクセ毛でお悩みであれば是非一度ご相談下さい
  .content
</template>

<script>
import cutSample from "@/assets/images/cut-sample.jpg";

export default {
  data() {
    return {
      cutSample,
    };
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
  section
    margin-bottom: 30px
    p
      margin-bottom: 5px
@media screen and (max-width: 480px)
  .about
    .content
      text-align: left
      padding: 0 25px
</style>