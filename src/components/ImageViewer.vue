<template>
  <div>
    <img :src="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageViewer",
  computed: {
    image() {
      return this.$route.meta.image as string;
    },
  },
});
</script>
