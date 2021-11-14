<template>
  <div class="error-container">
    <span class="error-header">Oops!</span>
    <span class="error-text"
      >Failed to load repository information. Try reloading the page or contact
      the developer.</span
    >
  </div>
</template>

<style>
.error-container {
  display: flex;
  gap: 0.625rem;
  flex-direction: column;
}
.error-header {
  display: block;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: bold;
}
.error-text {
  display: block;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
}
@media screen and (min-width: 64em) {
  .error-container {
    gap: 0.625rem;
  }
  .error-header {
    font-size: 1.75rem;
  }
  .error-text {
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 64em) {
  .error-container {
    gap: 0.375rem;
  }
  .error-header {
    font-size: 1.5rem;
  }
  .error-text {
    font-size: 1rem;
  }
}
</style>