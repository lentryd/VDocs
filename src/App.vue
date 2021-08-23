<template>
  <div class="app">
    <Header />
    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";

export default defineComponent({
  components: { Header, Content },
});
</script>

<style>
.app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.fade-enter-active {
  animation: fade-in 0.5s;
}
.fade-leave-active {
  animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>