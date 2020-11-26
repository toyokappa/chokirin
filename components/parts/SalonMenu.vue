<template lang="pug">
.salon-menu
  .title Salon Menu
  ul.nav
    li.nav-item(@click="selectVisitor", :class="{ active: isVisitor }") ご新規様
    li.nav-item(@click="selectMember", :class="{ active: !isVisitor }") メンバー様
  table.menu
    tr.menu-item(v-for="(item, index) in menu", :key="index")
      td.name {{ item.name }}
      td.value(v-if="isVisitor") {{ item.visitor }}
      td.value(v-else) {{ item.member }}
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
  computed: {
    menu() {
      return this.$store.getters.menu;
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
    font-family: $en-accent-family
    margin-bottom: 30px
  .nav
    justify-content: center
    margin-bottom: 20px
    .nav-item
      font-weight: bold
      transition: 0.3s
      cursor: pointer
      border: 2px solid black
      padding: 5px 20px
      margin: 0 20px
      &:hover, &.active
        color: white
        text-decoration: none
        background-color: black
  .menu
    font-size: 18px
    font-weight: bold
    width: 100%
    margin-bottom: 30px
    .menu-item
      height: 40px
      text-align: left
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
    font-size: 14px
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
@include media-breakpoint-down(md)
  .salon-menu
    padding: 10px 20px
    .title
      font-size: 20px
      margin-bottom: 20px
    .nav
      margin-bottom: 15px
      .nav-item
        margin: 0 10px
    .menu
      margin-bottom: 20px
    .reserve-button
      font-size: 16px
</style>