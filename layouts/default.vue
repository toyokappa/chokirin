<template lang="pug">
div
  nuxt
</template>

<script>
export default {
  async fetch() {
    const contentRes = await this.$ctfClient.getEntries({
      content_type: "content",
      order: "-sys.createdAt",
      limit: 1,
    });
    this.$store.commit("loadContent", contentRes.items[0]);
  },
};
</script>

<style lang="sass">
html
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 14px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*, *:before, *:after
  box-sizing: border-box
  margin: 0

a
  text-decoration: none
  transition: 0.3s
  &:hover
    text-decoration: none
    opacity: 0.7

.content
  text-align: center
  font-size: 16px
  letter-spacing: 2px
  line-height: 1.7
  section
    margin-bottom: 30px
    p
      margin-bottom: 5px
@media screen and (max-width: 480px)
  .content
    text-align: left
    padding: 0 25px
    p
      margin-bottom: 0
      display: inline
</style>
