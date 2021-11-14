<template>
  <div class="body-container">
    <User :src="avatar" :username="username" />

    <Name :name="repository" />

    <Description :description="description" />

    <Homepage :href="homepage" />

    <Stats :stars="stars" :forks="forks" />
  </div>
</template>

<script lang="ts">
import User from "./User.vue";
import Name from "./Name.vue";
import Description from "./Description.vue";
import Homepage from "./Homepage.vue";
import Stats from "./Stats.vue";

export default {
  components: { User, Name, Description, Homepage, Stats },

  props: {
    avatar: { type: String, required: true },
    username: { type: String, required: true },
    repository: { type: String, required: true },
    description: { type: String, required: true },
    homepage: { type: String },
    stars: { type: Number },
    forks: { type: Number },
  },
};
</script>

<style>
.body-container {
  display: flex;
  gap: 0.625rem;
  flex-direction: column;
}
</style>