<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <div :key="$route.path">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    setTheme() {
      document
        .querySelector("meta[name=theme-color]")
        ?.setAttribute(
          "content",
          getComputedStyle(document.body)
            ?.getPropertyValue("--blob-header-background")
            ?.trim()
        );
    },
    navigation(e: MouseEvent) {
      const target = e.target as HTMLInputElement;
      if (target.tagName !== "A") return false;

      const href = decodeURI(target.getAttribute("href") ?? "#");
      if (/^(h|\/{2})/.test(href)) return;
      else e.preventDefault();

      let { hash, pathname: path } = new URL(
        href,
        "http://example.com" + this.$route.path.replace("/blob", "")
      );
      if (!path.startsWith("/blob")) path = "/blob" + path;

      this.$router.push({ hash: decodeURI(hash), path: decodeURI(path) });
    },
  },

  mounted() {
    this.setTheme();
    window.addEventListener("click", this.navigation);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", this.setTheme);
  },
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (prefers-color-scheme: light) {
  :root {
    --app-color: #0c0c0c;
    --app-background: #ffffff;

    --link-color: #0366d6;

    --blockquote-color: #6c6f7e;
    --blockquote-border: #e2e3e7;

    --table-border: #e3e4e8;
    --table-even-background: #f7f7f9;

    --code-color: #6b6e7d;
    --code-background: #f7f7f9;

    --pre-color: #303439;
    --pre-background: #f7f7f9;

    --divider-background: #d6d7d9;

    --repo-card-color: #0a0a0a;
    --repo-card-background: #fbfbfc;

    --repo-card-skeleton-background: 240, 12%;

    --repo-card-icon-color: #9194a1;

    --repo-card-btn-color: #41434e;
    --repo-card-btn-border: #cacbce;
    --repo-card-btn-background: #ffffff;

    --repo-btn-box: #eff0f5;
    --repo-btn-fill: #525560;

    --readme-color: #525560;
    --readme-icon-color: #525560;

    --blob-header-color: #050505;
    --blob-header-background: #fbfbfc;
    --blob-header-icon-color: #050505;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --app-color: #fbfbfc;
    --app-background: #17181c;

    --link-color: #2e8fff;

    --blockquote-color: #9093a0;
    --blockquote-border: #41434e;

    --table-border: #41434e;
    --table-even-background: #24252a;

    --code-color: #9194a1;
    --code-background: #24252a;

    --pre-color: #fbfbfc;
    --pre-background: #24252a;

    --divider-background: #323337;

    --repo-card-color: #ffffff;
    --repo-card-background: #0b0b0d;

    --repo-card-skeleton-background: 230, 8%;

    --repo-card-icon-color: #6c6f7e;

    --repo-card-btn-color: #bfc1c9;
    --repo-card-btn-border: #232326;
    --repo-card-btn-background: #17181c;

    --repo-btn-box: #383a42;
    --repo-btn-fill: #bfc1c9;

    --readme-color: #a9abb6;
    --readme-icon-color: #6c6f7e;

    --blob-header-color: #fefefe;
    --blob-header-background: #17181c;
    --blob-header-icon-color: #fefefe;
  }
}
</style>