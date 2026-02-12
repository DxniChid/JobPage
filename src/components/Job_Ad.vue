<template>
  
  <div class="page">
    <div class="container">

      <div v-for="job in jobs" :key="job.id" class="card" @click="$router.push">

        <div class="left">
          <div class="title">{{ job.title }}</div>
          <div class="company">{{ job.company }}</div>
        </div>

        <div class="right">
          <div class="location">
            📍 {{ job.city }}, {{ job.zip }} | {{ job.canton }}
          </div>

          <button
            class="heart"
            :class="{ active: job.favorite }"
            @click="$emit('toggle-favorite', job.id)"
          >
            ♥
          </button>
        </div>

      </div>

    </div>
  </div>
  
</template>

<script setup>
defineProps({
  jobs: {
    type: Array,
    required: true
  }
})

defineEmits(["toggle-favorite"])
</script>

<style scoped>

.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  background: white;
}

.container {
  width: 720px;
  background: #e6e6e6;
  border-radius: 30px;
  padding: 28px;
}

.card {
  background: #f3f3f3;
  border-radius: 24px;
  padding: 22px 26px;
  margin-bottom: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.15s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.08);
}


.title {
  font-size: 18px;
  font-weight: 600;
}

.company {
  font-size: 14px;
  color: #b5b5b5;
  margin-top: 6px;
}

.right {
  display: flex;
  align-items: center;
  gap: 22px;
}

.location {
  font-size: 14px;
  color: #444;
}

.heart {
  font-size: 22px;
  border: none;
  background: none;
  cursor: pointer;
  color: #6b5a8e;
  transition: 0.15s;
}

.heart.active {
  color: #c23a4a;
  transform: scale(1.15);
}

</style>