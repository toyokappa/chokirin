
<template lang="pug">
.virus-button
  .virus-button-area(
    v-lazy:background-image="virus",
    @click="$refs.modal.openModal()"
  )
    .virus-detail
      img.virus-image(v-lazy="virus")
      .virus-text
        div 店舗での
        div コロナ対策
  m-modal(ref="modal")
    p-virus-guideline
</template>

<script>
import MModal from "@/components/modules/Modal";
import PVirusGuideline from "@/components/parts/VirusGuideline";

import virus from "@/assets/images/virus.png";

export default {
  components: {
    MModal,
    PVirusGuideline,
  },
  data() {
    return {
      virus,
    };
  },
};
</script>

<style lang="sass" scoped>
.virus-button
  .virus-button-area
    position: fixed
    z-index: 100
    cursor: pointer
    @include media-breakpoint-up(sm)
      background-size: cover
      background-position: center center
      border: 5px white solid
      border-radius: 50%
      overflow: hidden
      width: 150px
      height: 150px
      bottom: 40px
      right: 60px
    @include media-breakpoint-down(xs)
      display: block
      background-image: none !important
      background-color: white
      width: 100%
      padding: 5px
      bottom: 0
    .virus-detail
      text-align: center
      @include media-breakpoint-up(sm)
        color: white
        font-size: 11px
        font-weight: bold
        width: 100%
        background-color: rgba(0, 0, 0, 0.7)
        padding: 7px 20px 15px
        position: absolute
        bottom: 0
        .virus-image
          display: none
      @include media-breakpoint-down(xs)
        color: $primary-grey
        font-size: 16px
        font-weight: bold
        display: flex
        align-items: center
        .virus-image
          height: 50px
          margin-right: 10px
        .virus-text
          text-align: center
          width: 100%
          div
            display: inline-block
</style>