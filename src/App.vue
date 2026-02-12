<script setup>
import Job_Ad from './components/Job_Ad.vue';
import { ref } from "vue";


const jobs = ref([
{


  id: 1,
  title: "Informatiker/in EFZ",
  company: "Informatik GmbH",
    city: "Jegenstorf",
    zip: "3303",
    canton: "SO",
    favorite: false
  },
  {
    id: 2,
    title: "Informatiker/in EFZ",
    company: "Mustermann AG",
    city: "Luzern",
    zip: "6000",
    canton: "LU",
    favorite: false
  },
  {
    id: 3,
    title: "Informatiker/in EFZ",
    company: "Informatik AG",
    city: "Visp",
    zip: "3930",
    canton: "VS",
    favorite: true
}


])

  function toggleFavorite(id) {
  const job = jobs.value.find(j => j.id === id)
  job.favorite = !job.favorite
}


</script>

<template>
  <header>
    <h3>Meine Favoriten</h3>
    <h1>Jobpage</h1>
  </header>
  <div class="search-wrap">
    <input
      v-model="search"
      class="search"
      placeholder="Bitte eingeben..."
    />
    <button class="filter">⚙</button>
  </div>
  <Job_Ad
    :jobs="jobs"
    @toggle-favorite="toggleFavorite"
  />

<footer>
  test test
</footer>
</template>

<style scoped>
header {
  background-color: #6b5a8e;
  width: 100%;
  height: 100px;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  
}

h3 {
  font-size: 15px;
  text-align: left;
}

footer {
  background-color: #6b5a8e;
  width: 100%;
  height: 80px;
  margin-top: 80px;
}
.jobs-wrapper {
  padding: 20px;
  max-width: 700px;
  background: #eee;
  border-radius: 20px;
}

.job-card {
  background: white;
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.job-title {
  font-weight: bold;
}

.job-company {
  color: #999;
  font-size: 14px;
}

.right {
  display: flex;
  gap: 20px;
  align-items: center;
}

.fav {
  border: none;
  font-size: 22px;
  background: none;
  cursor: pointer;
  color: #6b5a8e;
}

.fav.active {
  color: red;
}
.search-wrap {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
}

.search {
  width: 420px;
  padding: 14px 18px;
  border-radius: 14px;
  border: none;
  background: #eee;
  font-size: 15px;
}

.filter {
  border: none;
  background: #6b5a8e;
  color: white;
  border-radius: 14px;
  padding: 0 18px;
  font-size: 18px;
  cursor: pointer;
}
</style>
