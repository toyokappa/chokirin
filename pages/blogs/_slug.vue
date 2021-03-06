<template lang="pug">
#wrapper
  p-blog-header
  section.section
    p-blog-title
    s-blog-post(:blogPost="blogPost")
    m-next-prev(:nextPost="nextPost", :prevPost="prevPost")
  section.section.section-dark
    p-section-header(
      :logo="reserveLogo",
      title="最後に",
      subtitle="Last Message",
      description="オーナーの想い",
      titleColor="#C09A73",
      subtitleColor="white"
    )
    s-last-message
  g-footer
</template>

<script>
import eyecatchParserMixin from "@/components/mixins/eyecatchParserMixin";

import GFooter from "@/components/global/Footer";
import PBlogHeader from "@/components/parts/BlogHeader";
import PBlogTitle from "@/components/parts/BlogTitle";
import PSectionHeader from "@/components/parts/SectionHeader";
import MNextPrev from "@/components/modules/NextPrev";
import SBlogPost from "@/components/sections/BlogPost";
import SLastMessage from "@/components/sections/LastMessage";

import reserveLogo from "@/assets/images/reserve.svg";

export default {
  mixins: [eyecatchParserMixin],
  components: {
    GFooter,
    PBlogHeader,
    PBlogTitle,
    PSectionHeader,
    MNextPrev,
    SBlogPost,
    SLastMessage,
  },
  data() {
    return {
      reserveLogo,
    };
  },
  async asyncData({ app, params, payload }) {
    let blogPost;
    if (payload) {
      blogPost = payload;
    } else {
      const blogRes = await app.$ctfClient.getEntries({
        content_type: "blog",
        "fields.slug": params.slug,
      });
      blogPost = blogRes.items[0];
    }

    const prevRes = await app.$ctfClient.getEntries({
      content_type: "blog",
      "sys.createdAt[lt]": blogPost.sys.createdAt,
      order: "-sys.createdAt",
      limit: 1,
    });
    const prevPost = prevRes.items[0];

    const nextRes = await app.$ctfClient.getEntries({
      content_type: "blog",
      "sys.createdAt[gt]": blogPost.sys.createdAt,
      order: "sys.createdAt",
      limit: 1,
    });
    const nextPost = nextRes.items[0];

    return {
      blogPost,
      prevPost,
      nextPost,
    };
  },
  head() {
    const { title, description, eyecatch } = this.blogPost.fields;
    const pageTitle = `${title} | ちょきりん Official Blog`;
    const imageUrl = `https:${this.parseEyecatch(eyecatch)}`;
    const pageUrl = `https://${process.env.domain}/${this.$route.path}`;
    return {
      title: pageTitle,
      meta: [
        { name: "description", content: description },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: imageUrl },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: description },
        { property: "og:title", content: pageTitle },
        { property: "og:type", content: "article" },
        { property: "og:image", content: imageUrl },
        { property: "og:description", content: description },
        { property: "og:url", content: pageUrl },
      ],
    };
  },
};
</script>

<style lang="sass">
#wrapper
  .section
    padding-bottom: 100px
  .section-dark
    background-color: $primary-dark
</style>
