<template lang="pug">
.salon-menu
  .title Salon Menu
  ul.nav
    li.nav-item(@click="selectVisitor", :class="{ active: isVisitor }") ご新規様
    li.nav-item(@click="selectMember", :class="{ active: !isVisitor }") メンバー様
  table.menu
    tr.menu-item
      td.name カット
      td.value(v-if="isVisitor") 5,000円
      td.value(v-else) 4,500円
    tr.menu-item
      td.name ケアカット
      td.value(v-if="isVisitor") 8,500円
      td.value(v-else) 7,500円
    tr.menu-item
      td.name 美髪エステカット
      td.value(v-if="isVisitor") 9,000円
      td.value(v-else) 8,000円
    tr.menu-item
      td.name ケアエステカット
      td.value(v-if="isVisitor") 12,000円
      td.value(v-else) 11,000円
    tr.menu-item
      td.name カラー
      td.value(v-if="isVisitor") 6,000円~
      td.value(v-else) 5,500円~
    tr.menu-item
      td.name ストレート
      td.value(v-if="isVisitor") 15,000円~
      td.value(v-else) 14,500円~
    tr.menu-item
      td.name パーマ
      td.value(v-if="isVisitor") 16,000円
      td.value(v-else) 15,000円
    tr.menu-item
      td.name ケアエステメニュー
      td.value(v-if="isVisitor") 3,000円~
      td.value(v-else) 2,500円~
  .text-center
    .reserve-button.line
      fa.mr-2(:icon="faLine")
      span.text LINEでの予約はコチラ
      fa.ml-2(:icon="faAngleDoubleRight")
  .text-center
    .reserve-button.web
      fa.mr-2(:icon="faGlobe")
      span.text Webでの予約はコチラ
      fa.ml-2(:icon="faAngleDoubleRight")
  .text-center
    .reserve-button.tel
      fa.mr-2(:icon="faPhoneAlt")
      span.text 電話での予約はコチラ
      fa.ml-2(:icon="faAngleDoubleRight")
</template>

<script>
import {
  faGlobe,
  faPhoneAlt,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";

export default {
  data() {
    return {
      faGlobe,
      faPhoneAlt,
      faAngleDoubleRight,
      faLine,
      isVisitor: true,
    };
  },
  methods: {
    selectVisitor() {
      this.isVisitor = true;
    },
    selectMember() {
      this.isVisitor = false;
    },
  },
};
</script>

<style lang="sass" scoped>
.salon-menu
  background-color: white
  padding: 40px 80px
  .title
    font-size: 24px
    font-weight: bold
    text-align: center
    margin-bottom: 30px
  .nav
    margin-bottom: 20px
    justify-content: center
    .nav-item
      font-weight: bold
      border: 2px solid black
      padding: 5px 20px
      margin: 0 20px
      transition: 0.3s
      cursor: pointer
      &:hover, &.active
        color: white
        text-decoration: none
        background-color: black
  .menu
    width: 100%
    margin-bottom: 30px
    .menu-item
      font-size: 18px
      font-weight: bold
      height: 40px
      .name
        width: 250px
      .value
        width: 95px
  .reserve-button
    display: inline-block
    font-size: 16px
    font-weight: bold
    font-family: $en-accent-family
    background-color: white
    padding: 5px 10px
    margin-bottom: 10px
    transition: 0.3s
    cursor: pointer
    &.line
      color: #00B900
      border: 2px solid #00B900
      &:hover
        color: white
        text-decoration: none
        background-color: #00B900
    &.web, &.tel
      color: black
      border: 2px solid black
      &:hover
        color: white
        text-decoration: none
        background-color: black
</style>