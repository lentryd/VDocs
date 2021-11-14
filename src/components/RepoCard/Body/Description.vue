<template>
  <span class="repo-description" v-text="description" />
</template>

<script lang="ts">
export default {
  props: {
    description: { type: String, required: true },
  },
};
</script>

<style>
.repo-description {
  display: block;
  font-style: normal;
  font-weight: 300;
}
@media screen and (min-width: 64em) {
  .repo-description {
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 64em) {
  .repo-description {
    font-size: 1rem;
  }
}
</style>