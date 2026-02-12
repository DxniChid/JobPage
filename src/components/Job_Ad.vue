<template>
    <div class="jobs-wrapper">
    <div
      v-for="job in jobs"
      :key="job.id"
      class="job-card"
    >
      <div class="job-left">
        <div class="job-title">{{ job.title }}</div>
        <div class="job-company">{{ job.company }}</div>
      </div>
  
  <div class="page">
    <div class="container">

      <div v-for="job in jobs" :key="job.id" class="card">

        <div class="left">
          <div class="title">{{ job.title }}</div>
          <div class="company">{{ job.company }}</div>
        </div>

        <div class="right">
          <div class="location">
            📍 {{ job.city }}, {{ job.zip }} | {{ job.canton }}
          </div>

      <div class="job-right">
        <div class="job-location">
          📍 {{ job.city }}, {{ job.zip }} | {{ job.canton }}
          <button
            class="heart"
            :class="{ active: job.favorite }"
            @click="$emit('toggle-favorite', job.id)"
          >
            ♥
          </button>
        </div>

        <button
          class="fav-btn"
          :class="{ active: job.favorite }"
          @click="$emit('toggle-favorite', job.id)"
        >
          ♥
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({

    jobs: {
        type: Array,
        required: true
  jobs: {
    type: Array,
    required: true
  }
})

defineEmits(["toggle-favorite"])
</script>

<style scoped>

.page {

</style>