<template>
  <main :class="pageClass">
    <transition name="fade">
      <div v-show="loading" class="loader-skeleton">
        <Loader />
      </div>
    </transition>

    <transition-group name="fade" mode="out-in" @after-enter="pageScroll">
      <div @click="navigation" v-html="source" :key="source" />

      <Footer v-if="source" />
    </transition-group>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocation } from "vue-router";
import Loader from "@/components/Loader.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: { Loader, Footer },

  data: () => ({
    source: "",
    loading: true,
  }),

  computed: {
    isCode() {
      let { path } = this.$route;
      if (path == "/") path = this.$projectConfig.startPoint;

      return !path.endsWith(".md");
    },
    pageClass() {
      return !this.isCode ? "main-content" : "main-content-code";
    },
  },

  watch: {
    $route(to: RouteLocation, from: RouteLocation) {
      this.loadPage(to, from);
    },
  },

  methods: {
    navigation(e: Event) {
      const target = e.target as HTMLInputElement;

      if (target.tagName !== "A") return false;

      e.preventDefault();
      const href = decodeURI(target.getAttribute("href") ?? "#");

      if (/^(h|\/{2})/.test(href)) {
        location.replace(href);
        return false;
      }

      const { hash, pathname: path } = new URL(
        href,
        location.href.replace(process.env.BASE_URL, "/")
      );
      this.$router.push({ hash: decodeURI(hash), path: decodeURI(path) });
    },
    pageScroll() {
      const { hash } = this.$route;
      const { scroll } = window.history?.state;

      if (!hash && !scroll) window.scrollTo({ top: 0, behavior: "smooth" });
      else if (scroll) window.scrollTo({ ...scroll, behavior: "smooth" });
      else document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    },
    loadSource(path: string) {
      this.loading = true;

      if (path == "/") path = this.$projectConfig.startPoint;
      return this.$projectPage(path).then((source) => (this.source = source));
    },
    loadPage(to: RouteLocation, from?: RouteLocation) {
      const { path: toPath } = to;
      const { path: fromPath } = from ?? {};

      if (toPath == fromPath) this.pageScroll();
      else this.loadSource(toPath).then(() => (this.loading = false));
    },
  },

  beforeMount() {
    this.loadPage(this.$route);
  },
});
</script>

<style scoped>
.main-content {
  position: relative;
}
.loader-skeleton {
  z-index: 999;
  cursor: progress;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
}
.loader {
  position: sticky;
  top: calc(100vh / 2 - 50px);
}
</style>