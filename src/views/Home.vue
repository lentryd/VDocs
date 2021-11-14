<template>
  <RepoCard />
  <div class="main-content">
    <div class="btns-container">
      <Btn to="/blob/" text="Browse code" />
    </div>

    <Readme />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RepoCard from "@/components/RepoCard/index.vue";
import Btn from "@/components/RepoBtn.vue";
import Readme from "@/components/README.vue";

export default defineComponent({
  components: { RepoCard, Btn, Readme },
});
</script>

<style>
.btns-container {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
}
</style>