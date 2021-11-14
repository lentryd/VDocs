<template>
  <BlobHeader />

  <router-view
    :class="$route.meta.isMD ? 'main-content' : 'main-content-code'"
  />
</template>

<script lang="ts">
import BlobHeader from "@/components/BlobHeader.vue";

export default {
  components: { BlobHeader },
};
</script>