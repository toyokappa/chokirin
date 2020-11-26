<template lang="pug">
#wrapper
  g-header
  p-virus-button
  section#pageTop.section
    s-pagetop
  section.section
    s-first-message
  section.section
    p-section-header#about(
      :logo="aboutLogo",
      logoSize="lg",
      title="美容室chokirin",
      subtitle="What's Chokirin?",
      description="美容室の特徴"
    )
    s-about
  section.section
    p-section-header#owner(
      :logo="profileImage",
      logoSize="lg",
      title="北爪 陽",
      subtitle="Kitazume Akira",
      description="Salon Owner"
    )
    s-owner
  section.section
    p-section-header#concept(
      :logo="conceptLogo",
      title="コンセプト",
      subtitle="Our Concept",
      description="施術のこだわり"
    )
    s-concept
  section.section
    p-section-header#work(
      :logo="workLogo",
      title="お客様の声",
      subtitle="Photo And Message",
      description="実績とお客様の声を添えて"
    )
    s-work(:posts="workPosts")
  section.section
    p-section-header#gallery(
      :logo="galleryLogo",
      title="店舗風景",
      subtitle="Photo Gallery",
      description="自慢の店舗の雰囲気を"
    )
    s-gallery(:gallery="gallery")
    s-gallery-sp(:gallery="gallery")
  section.section
    p-section-header#blog(
      :logo="blogLogo",
      title="最新情報",
      subtitle="Recent Blog Posts",
      description="最新の動向をコンテンツとしてお届け"
    )
    s-blog(:blogPosts="blogPosts")
    p-blog-link-button
  section.section
    p-section-header#info(
      :logo="infoLogo",
      title="店舗案内",
      subtitle="information",
      description="ご来店に当たり"
    )
    s-store-info
  section.section.section-dark
    p-section-header#reserve(
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
import GHeader from "@/components/global/Header";
import GFooter from "@/components/global/Footer";
import PVirusButton from "@/components/parts/VirusButton";
import PSectionHeader from "@/components/parts/SectionHeader";
import PBlogLinkButton from "@/components/parts/BlogLinkButton";
import SPagetop from "@/components/sections/Pagetop";
import SFirstMessage from "@/components/sections/FirstMessage";
import SAbout from "@/components/sections/About";
import SOwner from "@/components/sections/Owner";
import SConcept from "@/components/sections/Concept";
import SWork from "@/components/sections/Work";
import SGallery from "@/components/sections/Gallery";
import SGallerySp from "@/components/sections/GallerySp";
import SBlog from "@/components/sections/Blog";
import SStoreInfo from "@/components/sections/StoreInfo";
import SLastMessage from "@/components/sections/LastMessage";

import aboutLogo from "@/assets/images/logo.jpg";
import conceptLogo from "@/assets/images/concept.svg";
import workLogo from "@/assets/images/work.svg";
import galleryLogo from "@/assets/images/gallery.svg";
import blogLogo from "@/assets/images/blog.svg";
import infoLogo from "@/assets/images/info.svg";
import reserveLogo from "@/assets/images/reserve.svg";

export default {
  components: {
    GHeader,
    GFooter,
    PVirusButton,
    PSectionHeader,
    PBlogLinkButton,
    SPagetop,
    SFirstMessage,
    SAbout,
    SOwner,
    SConcept,
    SWork,
    SGallery,
    SGallerySp,
    SBlog,
    SStoreInfo,
    SLastMessage,
  },
  data() {
    return {
      aboutLogo,
      conceptLogo,
      workLogo,
      galleryLogo,
      blogLogo,
      infoLogo,
      reserveLogo,
    };
  },
  async asyncData({ app }) {
    const workRes = await app.$ctfClient.getEntries({
      content_type: "work",
      order: "-sys.createdAt",
      limit: 12,
    });
    const workPosts = workRes.items;

    const galleryRes = await app.$ctfClient.getEntries({
      content_type: "gallery",
    });
    const gallery = galleryRes.items[0].fields.photo;

    const blogRes = await app.$ctfClient.getEntries({
      content_type: "blog",
      order: "-sys.createdAt",
      limit: 3,
    });
    const blogPosts = blogRes.items;

    return {
      workPosts,
      gallery,
      blogPosts,
    };
  },
  head() {
    const pageTitle =
      "群馬県前橋市｜くせ毛・ダメージ美容室chokirin(チョキリン)";
    const description =
      "前橋の美容室chokirin（チョキリン）は、クセ毛やダメージ毛の方におすすめの美容室です。";
    const imageUrl = `https://${process.env.domain}/ogp.jpg`;
    const pageUrl = `https://${process.env.domain}`;
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
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "scroll" || mutation.type === "resize") {
        const pageTop = document.querySelector("#pageTop");
        if (!pageTop) return;

        const isFixed =
          state.scrollTop > pageTop.clientHeight + 50 ||
          state.clientWidth < 991.98;
        this.$store.commit("fix", isFixed);
      }
    });
    this.changeScrollTop();
    this.changeClientWidth();
    document.onscroll = () => {
      this.changeScrollTop();
    };
    window.onresize = () => {
      this.changeClientWidth();
    };
  },
  methods: {
    changeScrollTop() {
      const el =
        document.scrollingElement || document.documentElement || document.body;
      const scrollTop = el.scrollTop;
      this.$store.commit("scroll", scrollTop);
    },
    changeClientWidth() {
      const clientWidth = document.body.clientWidth;
      this.$store.commit("resize", clientWidth);
    },
  },
  computed: {
    profileImage() {
      return this.$store.getters.profileImage;
    },
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
