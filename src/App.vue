<script setup></script>
<script setup>
import Job_Ad from './components/Job_Ad.vue';
import { ref } from "vue";


const jobs = ref([
{


  id: 1,
  title: "INformatiker/in EFZ",
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
  <Job_Ad
    :jobs="jobs"
    @toggle-favorite="toggleFavorite"
  />
</template>

<style scoped></style>
