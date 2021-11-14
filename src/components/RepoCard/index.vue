<template>
  <div class="repo-card">
    <transition name="fade" mode="out-in">
      <Skeleton v-if="loading" />
      <Body v-bind="data" v-else-if="!error" />
      <Error v-else />
    </transition>

    <Page />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Skeleton from "./Skeleton.vue";
import Body from "./Body/index.vue";
import Error from "./Error.vue";
import Page from "./Page.vue";

export default defineComponent({
  components: { Skeleton, Body, Error, Page },

  data: () => ({
    loading: true,
    error: false,
    data: {
      avatar: "",
      username: "",
      repository: "",
      description: "",
      homepage: "",
      stars: 0,
      forks: 0,
    },
  }),

  methods: {
    loadInfo() {
      this.error = false;
      this.loading = true;

      const { VUE_APP_GH_OWNER: owner, VUE_APP_GH_REPO: repo } = process.env;

      fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then((res) => res.json())
        .then((data) => {
          this.data.avatar = data.owner.avatar_url;
          this.data.username = data.owner.login;
          this.data.repository = data.name;
          this.data.description = data.description;
          this.data.homepage = data.homepage;
          this.data.stars = data.stargazers_count;
          this.data.forks = data.forks_count;
        })
        .catch((e) => {
          this.error = true;
          console.error(e);
        })
        .finally(() => (this.loading = false));
    },
  },

  beforeMount() {
    this.loadInfo();
  },
});
</script>

<style>
.repo-icon {
  fill: var(--repo-card-icon-color);
}
@media screen and (min-width: 64em) {
  .repo-icon {
    width: 1rem;
    height: 1rem;
  }
}
@media screen and (max-width: 64em) {
  .repo-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
}

.repo-card {
  display: flex;

  gap: 0.625rem;
  flex-direction: column;

  color: var(--repo-card-color);
  background: var(--repo-card-background);
  border-bottom: 0.09375rem solid var(--divider-background);
}
@media screen and (min-width: 64em) {
  .repo-card {
    padding: 4rem calc((100vw - 52em) / 2);
  }
}
@media screen and (min-width: 42em) and (max-width: 64em) {
  .repo-card {
    padding: 3rem 4rem;
  }
}
@media screen and (max-width: 42em) {
  .repo-card {
    padding: 2rem 1rem;
  }
}
</style>