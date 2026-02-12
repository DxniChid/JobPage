<script setup></script>
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

<style scoped></style>
