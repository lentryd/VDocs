<template>
  <a :href="href" class="repo-owner">
    <img class="repo-owner-avatar" :src="src" />
    <span class="repo-owner-username" v-text="username" />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: { type: String, required: true },
    username: { type: String, required: true },
  },

  computed: {
    href() {
      const { username } = this;
      return `https://github.com/${username}`;
    },
  },
});
</script>

<style>
.repo-owner {
  width: fit-content;
  display: flex;
  gap: 0.375rem;
  align-items: center;
  flex-direction: row;
}
.repo-owner-avatar {
  width: 1.873rem;
  height: 1.873rem;
  border-radius: 50%;
}
.repo-owner-username {
  color: var(--repo-card-color);
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  text-decoration-line: underline;
}
@media screen and (min-width: 64em) {
  .repo-owner {
    gap: 0.625rem;
  }
  .repo-owner-avatar {
    width: 2.5rem;
    height: 2.5rem;
  }
  .repo-owner-username {
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 64em) {
  .repo-owner {
    gap: 0.375rem;
  }
  .repo-owner-avatar {
    width: 1.873rem;
    height: 1.873rem;
  }
  .repo-owner-username {
    font-size: 1rem;
  }
}
</style>