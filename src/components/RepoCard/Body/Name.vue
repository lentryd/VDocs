<template>
  <span class="repo-name" v-text="name" />
</template>

<script lang="ts">
export default {
  props: {
    name: { type: String, required: true },
  },
};
</script>

<style>
.repo-name {
  display: block;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: bold;
}
@media screen and (min-width: 64em) {
  .repo-name {
    font-size: 1.75rem;
  }
}
@media screen and (max-width: 64em) {
  .repo-name {
    font-size: 1.5rem;
  }
}
</style>