<template>
  <hr v-if="component && !withoutDivider" />

  <div v-if="component" class="readme-info">
    <svg class="readme-icon" version="1.1" viewBox="0 0 24 24">
      <g>
        <path
          d="m12 1a11 11 0 1 0 11 11 11.013 11.013 0 0 0 -11-11zm0 20a9 9 0 1 1 9-9 9.011 9.011 0 0 1 -9 9z"
        />
        <path d="m12 9a1 1 0 0 0 -1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0 -1-1z" />
        <circle cx="12" cy="7" r="1" />
      </g>
    </svg>

    {{ path }}
  </div>

  <component v-if="component" :is="component" />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

const allReadmes = require
  .context("@/pages/", true, /README\.vue$/)
  .keys()
  .map((p) => p.replace(/^\./, ""));

export default defineComponent({
  props: {
    dir: { type: String, default: "/" },
    withoutDivider: { type: Boolean, default: false },
  },

  computed: {
    path() {
      let path = this.dir.replace(/^\//g, "");
      if (path && !path.endsWith("/")) path = path + "/";
      path += "README.md";

      return path;
    },
    component() {
      let path = this.dir;
      if (!path.startsWith("/")) path = "/" + path;
      if (!path.endsWith("/")) path = path + "/";
      path += "README.vue";

      if (!allReadmes.includes(path)) return undefined;
      else return defineAsyncComponent(() => import("@/pages" + path));
    },
  },
});
</script>>

<style>
.readme-info {
  margin: 1rem 0;
  gap: 0.375rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: var(--readme-color);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: normal;
}
.readme-icon {
  fill: var(--readme-icon-color);
  width: 0.875rem;
  height: 0.875rem;
}
@media screen and (min-width: 64em) {
  .readme-info {
    gap: 0.625rem;
    font-size: 1rem;
  }
  .readme-icon {
    width: 1rem;
    height: 1rem;
  }
}
@media screen and (max-width: 64em) {
  .readme-info {
    gap: 0.375rem;
    font-size: 0.875rem;
  }
  .readme-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
}
</style>