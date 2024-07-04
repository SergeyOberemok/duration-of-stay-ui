<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(false)
const stays = ref(null)

onMounted(() => fetchStays())

async function fetchStays() {
  loading.value = true

  try {
    const response = await fetch('/api/stays')

    stays.value = await response.json()
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div v-if="loading">Loading...</div>

  <div v-if="stays">
    <h3>Stays</h3>
    <div v-for="stay in stays" :key="stay._id">
      {{ stay.title }}
    </div>
  </div>
</template>
