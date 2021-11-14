<template>
  <div class="skeleton-container">
    <div class="repo-owner">
      <div class="repo-owner-avatar skeleton skeleton-img" />
      <div class="repo-owner-username skeleton skeleton-label" />
    </div>
    <div class="repo-name skeleton skeleton-header" />

    <div class="repo-description">
      <div class="skeleton skeleton-text" />
      <div class="skeleton skeleton-text" />
      <div class="skeleton skeleton-text" />
    </div>

    <div class="repo-stats">
      <div class="skeleton skeleton-badge" />
      <div class="skeleton skeleton-badge" />
    </div>
  </div>
</template>

<style>
.skeleton-container {
  display: flex;
  gap: 0.625rem;
  flex-direction: column;
}

.skeleton {
  opacity: 0.7;
  animation: skeleton-loading 1s linear infinite alternate;
}
@keyframes skeleton-loading {
  from {
    background-color: hsl(var(--repo-card-skeleton-background), 70%);
  }
  to {
    background-color: hsl(var(--repo-card-skeleton-background), 95%);
  }
}
.skeleton-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.skeleton-label {
  width: 60px;
  height: 16px;
  border-radius: 5px;
}
.skeleton-header {
  width: 120px;
  height: 20px;
  border-radius: 5px;
}
.skeleton-text {
  width: 100%;
  height: 16px;
  margin-bottom: 8px;
  border-radius: 5px;
}
.skeleton-text:last-child {
  width: 90%;
  margin-bottom: 0;
}
.skeleton-badge {
  width: 60px;
  height: 16px;
  border-radius: 5px;
}
</style>