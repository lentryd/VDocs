<template>
  <div class="main-content">
    <div class="btns-container">
      <Btn
        v-for="(f, i) in files"
        :to="'/blob' + f.path"
        :text="f.name"
        :key="i"
        :boxColor="f.isDir ? '#2E8EFE' : undefined"
      >
        <template v-slot:default="{ fill }">
          <svg v-if="f.isDir" fill="white" viewBox="0 0 16 16" version="1.1">
            <path
              fill-rule="evenodd"
              d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"
            />
          </svg>

          <svg v-else :fill="fill" viewBox="0 0 16 16" version="1.1">
            <path
              fill-rule="evenodd"
              d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"
            />
          </svg>
        </template>
      </Btn>
    </div>

    <README :dir="$route.path.replace('/blob/', '')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Btn from "./RepoBtn.vue";
import README from "./README.vue";

export default defineComponent({
  props: {
    result: { type: Array, required: true },
  },

  components: { Btn, README },

  computed: {
    files() {
      return this.result
        .sort()
        .sort(
          (a, b) =>
            +!!(b as { isDir: boolean }).isDir -
            +!!(a as { isDir: boolean }).isDir
        );
    },
  },
});
</script>>