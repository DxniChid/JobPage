import { createRouter, createWebHistory } from "vue-router"

import JobList from "./components/Job_Ad.vue"

const routes = [
  { path: "/", component: JobList },
  { path: "/job/:id", component: JobDetail }
]

export default createRouter({
  history: createWebHistory(),
  routes
})