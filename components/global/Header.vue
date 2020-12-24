<template lang="pug">
header.navbar.navbar-expand-lg.header-nav.fixed-top(
  :class="{ 'no-icon': $store.state.isFixed }"
)
  nav.container
    n-link.navbar-brand(v-scroll-to="'#pageTop'", to)
      img.logo(v-lazy="logo")
    .toggle-button
      client-only
        tasty-burger-button(
          type="spin",
          color="black",
          size="s",
          :active="isActive",
          @toggle="toggleNavMenu",
          ref="burgerButton"
        )
    .collapse-menu
      ul.navbar-nav
        li.nav-item
          n-link.nav-link(v-scroll-to="'#about'", to)
            .icon
              img(v-lazy="about")
            .text ABOUT
        li.nav-item
          n-link.nav-link(v-scroll-to="'#owner'", to)
            .icon
              img(v-lazy="owner")
            .text OWNER
        li.nav-item
          n-link.nav-link(v-scroll-to="'#concept'", to)
            .icon
              img(v-lazy="concept")
            .text CONCEPT
        li.nav-item
          n-link.nav-link(v-scroll-to="'#work'", to)
            .icon
              img(v-lazy="work")
            .text CATALOG
        li.nav-item
          n-link.nav-link(v-scroll-to="'#gallery'", to)
            .icon
              img(v-lazy="gallery")
            .text GALLERY
        li.nav-item
          n-link.nav-link(v-scroll-to="'#blog'", to)
            .icon
              img(v-lazy="blog")
            .text BLOG
        li.nav-item
          n-link.nav-link(v-scroll-to="'#info'", to)
            .icon
              img(v-lazy="info")
            .text INFO
        li.nav-item
          n-link.nav-link(v-scroll-to="'#reserve'", to)
            .icon
              img(v-lazy="reserve")
            .text RESERVE
        li.nav-item
          a.nav-link(
            href="javascript:void(0);",
            @click="$refs.modal.openModal()"
          )
            .icon
              img(v-lazy="menu")
            .text MENU
  #navbarMenu.container
    ul.navbar-nav(@click="toggleActive")
      li.nav-item
        n-link.nav-link(v-scroll-to="'#about'", to)
          span.icon
            img(v-lazy="about")
          span.text ABOUT
      li.nav-item
        n-link.nav-link(v-scroll-to="'#owner'", to)
          span.icon
            img(v-lazy="owner")
          span.text OWNER
      li.nav-item
        n-link.nav-link(v-scroll-to="'#concept'", to)
          span.icon
            img(v-lazy="concept")
          span.text CONCEPT
      li.nav-item
        n-link.nav-link(v-scroll-to="'#work'", to)
          span.icon
            img(v-lazy="work")
          span.text CATALOG
      li.nav-item
        n-link.nav-link(v-scroll-to="'#gallery'", to)
          span.icon
            img(v-lazy="gallery")
          span.text GALLERY
      li.nav-item
        n-link.nav-link(v-scroll-to="'#blog'", to)
          span.icon
            img(v-lazy="blog")
          span.text BLOG
      li.nav-item
        n-link.nav-link(v-scroll-to="'#info'", to)
          span.icon
            img(v-lazy="info")
          span.text INFO
      li.nav-item
        n-link.nav-link(v-scroll-to="'#reserve'", to)
          span.icon
            img(v-lazy="reserve")
          span.text RESERVE
      li.nav-item
        a.nav-link(
          href="javascript:void(0);",
          @click="$refs.modal.openModal()"
        )
          span.icon
            img(v-lazy="menu")
          span.text MENU
  m-modal(ref="modal")
    p-salon-menu
</template>

<script>
import MModal from "@/components/modules/Modal";
import PSalonMenu from "@/components/parts/SalonMenu";

import logo from "@/assets/images/logo.jpg";
import about from "@/assets/images/about.svg";
import owner from "@/assets/images/owner.svg";
import concept from "@/assets/images/concept.svg";
import work from "@/assets/images/work.svg";
import gallery from "@/assets/images/gallery.svg";
import blog from "@/assets/images/blog.svg";
import info from "@/assets/images/info.svg";
import reserve from "@/assets/images/reserve.svg";
import menu from "@/assets/images/menu.svg";

export default {
  components: {
    MModal,
    PSalonMenu,
  },
  data() {
    return {
      logo,
      about,
      owner,
      concept,
      work,
      gallery,
      blog,
      info,
      reserve,
      menu,
      activeLink: "",
      isActive: false,
    };
  },
  methods: {
    toggleNavMenu(active) {
      const nav = document.querySelector("#navbarMenu");
      active ? nav.classList.add("visible") : nav.classList.remove("visible");
    },
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="sass" scoped>
.header-nav.no-icon
  height: 50px
  div.icon
    display: none
  .logo
    height: 30px
.header-nav
  height: 100px
  font-family: $en-accent-family
  text-align: center
  background-color: white
  border-bottom: 3px solid $accent-color
  .logo
    height: 65px
  .toggle-button
    display: none
    margin-top: 5px
    button
      outline: none
  #navbarMenu
    display: none
  .nav-item
    margin-left: 20px
    .nav-link
      color: $primary-grey
      font-weight: bold
      div.icon
        margin-bottom: 5px
        img
          width: 30px
      span.icon
        margin-right: 5px
        img
          width: 20px
@include media-breakpoint-down(md)
  .logo
    height: 30px !important
  .toggle-button
    display: block !important
  .collapse-menu
    display: none
  #navbarMenu
    display: block !important
    position: fixed
    top: 70px
    left: 50%
    transform: translateX(-50%)
    width: 100%
    background-color: white
    visibility: hidden
    opacity: 0
    transition: 0.3s
    &.visible
      visibility: visible
      opacity: 1
    .navbar-nav
      width: 100%
      padding: 0 20px
      .nav-item
        padding: 15px 0
        border-bottom: 1px solid $secondary-grey
        margin-left: 0 !important
        &:last-child
          border-bottom: none
        .nav-link
          display: flex
          align-items: center
          justify-content: center
</style>