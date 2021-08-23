<template>
  <footer class="site-footer">
    <span class="site-footer-owner">
      <a
        v-text="$projectConfig.repo"
        :href="`//github.com/${$projectConfig.owner}/${$projectConfig.repo}`"
      />
      поддерживается
      <a
        v-text="$projectConfig.owner"
        :href="`//github.com/${$projectConfig.owner}`"
      />
    </span>
    <span class="site-footer-credits">
      Эта страница была создана с помощью
      <a href="//lentryd.su/VDocs">VDocs</a>.
    </span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({}),
});
</script>