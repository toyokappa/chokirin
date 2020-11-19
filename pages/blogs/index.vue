<template lang="pug">
#wrapper
  p-blog-header
  section.section
    p-blog-title
    s-blog(:blogPosts="blogPosts")
    m-paging(
      :total="blogRes.total",
      :limit="blogRes.limit",
      :skip="blogRes.skip"
    )
  section.section.section-dark
    p-section-header(
      :logo="reserveLogo",
      title="最後に",
      subtitle="Last Message",
      description="オーナーの想い",
      titleColor="#FFC32A",
      subtitleColor="white"
    )
    s-last-message
  g-footer
</template>

<script>
import GFooter from "@/components/global/Footer";
import PBlogHeader from "@/components/parts/BlogHeader";
import PBlogTitle from "@/components/parts/BlogTitle";
import PSectionHeader from "@/components/parts/SectionHeader";
import MPaging from "@/components/modules/Paging";
import SBlog from "@/components/sections/Blog";
import SLastMessage from "@/components/sections/LastMessage";

import reserveLogo from "@/assets/images/reserve.svg";

export default {
  components: {
    GFooter,
    PBlogHeader,
    PBlogTitle,
    PSectionHeader,
    MPaging,
    SBlog,
    SLastMessage,
  },
  data() {
    return {
      reserveLogo,
    };
  },
  async asyncData({ route, app, env }) {
    let pageNum = 1;
    if (typeof route.params.page !== "undefined") {
      pageNum = parseInt(route.params.page);
    }
    const limit = env.pageLimit;
    const skip = limit * pageNum - limit;
    let params = {
      content_type: "blog",
      order: "-sys.createdAt",
      limit,
      skip,
    };

    const blogRes = await app.$ctfClient.getEntries(params);
    const blogPosts = blogRes.items;

    return {
      blogRes,
      blogPosts,
    };
  },
  head() {
    return {
      title: "かくれんぼ in ぐんま Official Blog",
      meta: [
        {
          name: "description",
          content:
            "群馬県でかくれんぼの楽しさを広めるために活動している団体の公式ブログ。老若男女誰でも楽しめる、そんなかくれんぼのイベント情報を発信しています。",
        },
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
