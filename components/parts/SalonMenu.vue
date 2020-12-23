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
  .reserve-title ご予約・お問い合わせ
  .reserve-area
    a.reserve-button.line(href="https://line.me/ti/p/aQ2Wqwq6so", target="new")
      img(src="@/assets/images/line.svg")
    a.reserve-button.web(
      href="https://beauty.hotpepper.jp/slnH000518332/",
      target="new"
    )
      img(src="@/assets/images/hpb.svg")
    a.reserve-button.tel(href="tel:0278966287", target="new")
      fa(:icon="faPhoneAlt")
</template>

<script>
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      faPhoneAlt,
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
  padding: 30px 60px
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
    margin-bottom: 40px
    .menu-item
      height: 40px
      text-align: left
      .name
        width: 250px
      .value
        width: 95px
  .reserve-title
    font-size: 24px
    font-weight: bold
    text-align: center
    margin-bottom: 15px
  .reserve-area
    display: flex
    justify-content: center
    .reserve-button
      display: flex
      justify-content: center
      align-items: center
      width: 50px
      height: 50px
      background-color: white
      border-radius: 50%
      margin: 10px
      transition: 0.3s
      cursor: pointer
      img
        width: 30px
      &.line
        color: #00B900
        border: 2px solid #00B900
        &:hover
          text-decoration: none
          background-color: #00B900
      &.web
        border: 2px solid #ae2f5b
        &:hover
          text-decoration: none
          background-color: #ae2f5b
      &.tel
        font-size: 24px
        color: black
        border: 2px solid black
        &:hover
          color: white
          text-decoration: none
          background-color: black
@include media-breakpoint-down(md)
  .salon-menu
    padding: 20px
    .title
      font-size: 20px
      margin-bottom: 20px
    .nav
      margin-bottom: 15px
      .nav-item
        margin: 0 10px
    .menu
      margin-bottom: 30px
    .reserve-button
      font-size: 16px
</style>