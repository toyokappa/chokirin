<template lang="pug">
.last-message
  .content
    section
      p ここまで読んで頂きありがとうございました。
    section
      p 必ず髪は綺麗になります。
    section
      p 広がりやダメージの原因は、美容師側の施術による場合が多いと思っています。
    section
      p 広がらないような丁寧なカット、ストレートやパーマ、カラーの
      p 施術の際のダメージを極限まで抑える事、
      p 当たり前のように思いますが本当はとても大切です。
    section
      p 美容室選びにもう迷わせないように、
      p 丁寧に《心を込めて》ご担当させて頂きます。どんな悩みもお聞かせください。
    section
      p 少しでも気になりましたら下記からご相談・ご予約下さい。
  p-reserve-button
</template>

<script>
import pReserveButton from "@/components/parts/reserveButton";

export default {
  components: {
    pReserveButton,
  },
};
</script>

<style lang="sass" scoped>
.last-message
  text-align: center
  .content
    color: white
    font-size: 16px
    letter-spacing: 2px
    line-height: 1.7
    margin-bottom: 80px
    section
      margin-bottom: 30px
      p
        margin-bottom: 5px
@media screen and (max-width: 480px)
  .last-message
    .content
      text-align: left
      padding: 0 25px
</style>