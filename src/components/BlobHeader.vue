<template>
  <div class="blob-header">
    <div class="blob-header-back" @click="goBack">
      <svg
        class="blob-header-icon"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 384 384"
      >
        <g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <polygon
                points="384,170.667 81.707,170.667 158.187,94.187 128,64 0,192 128,320 158.187,289.813 81.707,213.333 384,213.333       "
              />
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
        </g>
      </svg>

      <span class="blob-header-name" v-text="fileName" />
    </div>

    <div v-show="isFile" class="blob-header-edit" @click="goEdit">
      <svg class="blob-header-icon" viewBox="0 0 16 16" version="1.1">
        <path
          fill-rule="evenodd"
          d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    isFile() {
      return !this.$route.meta.isDir;
    },
    fileName() {
      return this.$route.meta.name || "Files";
    },
  },

  methods: {
    goBack() {
      if (window?.history?.length > 2) this.$router.back();
      else this.$router.push("/");
    },
    goEdit() {
      const href = this.$route.fullPath.match(/blob\/(.*)/)?.[1] ?? "";
      const {
        VUE_APP_GH_REPO: repo,
        VUE_APP_GH_OWNER: owner,
        VUE_APP_GH_BRANCH: branch = "main",
      } = process.env;

      location.href = `https://github.com/${owner}/${repo}/edit/${branch}/${href}`;
    },
  },
});
</script>

<style>
.blob-header {
  width: 100%;
  height: 3rem;
  background: var(--blob-header-background);
  border-bottom: 1px solid var(--divider-background);

  top: 0;
  z-index: 9999;
  position: sticky;

  padding: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.blob-header-icon {
  width: 1rem;
  height: 1rem;
  fill: var(--blob-header-icon-color);
}

.blob-header-back,
.blob-header-edit {
  cursor: pointer;
  display: flex;
  gap: 0.625rem;
  align-items: center;
  flex-direction: row;
}
.blob-header-name {
  font-size: 1rem;
  font-weight: bold;
}

@media screen and (min-width: 64em) {
  .blob-header {
    height: 3.5rem;
    padding: 1rem;
  }

  .blob-header-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .blob-header-back,
  .blob-header-edit {
    gap: 0.875rem;
  }

  .blob-header-name {
    font-size: 1.25rem;
  }
}
</style>