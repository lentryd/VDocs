<template>
  <div class="repo-stats">
    <div class="repo-stats-badge">
      <svg viewBox="0 0 16 16" version="1.1" class="repo-icon">
        <path
          fill-rule="evenodd"
          d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
        />
      </svg>
      <span v-text="stars" /> stars
    </div>

    <div class="repo-stats-badge">
      <svg viewBox="0 0 16 16" version="1.1" class="repo-icon">
        <path
          fill-rule="evenodd"
          d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
        />
      </svg>

      <span v-text="forks" /> forks
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    stars: { type: Number, default: 0 },
    forks: { type: Number, default: 0 },
  },
};
</script>

<style>
.repo-stats {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: row;
}
.repo-stats-badge {
  display: flex;
  gap: 0.375rem;
  align-items: center;
  flex-direction: row;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  color: var(--repo-card-icon-color);
}
.repo-stats-badge span {
  font-weight: bold;
  color: var(--repo-card-color);
}
@media screen and (min-width: 64em) {
  .repo-stats {
    gap: 1.25rem;
  }
  .repo-stats-badge {
    gap: 0.625rem;
    font-size: 1rem;
  }
}
@media screen and (max-width: 64em) {
  .repo-stats {
    gap: 1rem;
  }
  .repo-stats-badge {
    gap: 0.375rem;
    font-size: 0.875rem;
  }
}
</style>