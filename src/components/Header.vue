<template>
  <header class="page-header">
    <transition name="fade" mode="out-in">
      <Loader v-if="loading" invert />

      <div v-else>
        <h1 class="project-name" v-text="name" />
        <h2 class="project-tagline" v-text="description" />

        <div class="project-badges">
          <div v-if="stars" class="project-badge">
            <Star />
            <span v-text="stars" />
          </div>

          <div v-if="license" class="project-badge">
            <License />
            <span v-text="license" />
          </div>

          <div v-if="language" class="project-badge">
            <Language />
            <span v-text="language" />
          </div>
        </div>

        <a :href="repoUrl" class="project-repo">Посмотреть на GitHub</a>
      </div>
    </transition>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loader from "@/components/Loader.vue";
import Star from "@/assets/star.svg";
import License from "@/assets/license.svg";
import Language from "@/assets/language.svg";

export default defineComponent({
  components: { Loader, Star, License, Language },

  data: () => ({
    name: "Упс, произошла ошибка.",
    description: "Не удалось загрузить информацию о репозитории.",

    stars: 0,
    license: "",
    language: "",

    loading: true,
  }),

  computed: {
    repoUrl() {
      let { path, hash } = this.$route;
      const { owner, repo, branch, startPoint } = this.$projectConfig;

      path = path.replace(/^\//, "") || startPoint;

      return `https://github.com/${owner}/${repo}/blob/${branch}/${path}${hash}`;
    },
  },

  methods: {
    loadInfo() {
      this.loading = true;
      return this.$projectInfo()
        .then((data) => {
          this.name = data.name;
          this.description = data.description;

          this.stars = data.stars;
          this.license = data.license;
          this.language = data.language;
        })
        .finally(() => (this.loading = false));
    },
  },

  beforeMount() {
    this.loadInfo();
  },
});
</script>