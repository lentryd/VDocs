<template>
  <div class="loader">
    <div :style="style" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    style() {
      return `filter: invert(${+this.invert});`;
    },
  },
});
</script>

<style scoped>
.loader {
  width: fit-content;
  height: 5em;
  margin: 40px auto;
  position: relative;
}

.loader > div,
.loader > div:before,
.loader > div:after {
  background: #ffffff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader > div {
  color: #ffffff;
  text-indent: -9999em;
  position: absolute;
  top: calc(50% - 1.5em);
  left: calc(50% - 0.5em);
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader > div:before,
.loader > div:after {
  position: absolute;
  top: 0;
  content: "";
}
.loader > div:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader > div:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>