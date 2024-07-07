<script setup>
import { ref, shallowRef, onMounted } from 'vue'

import StaysChart from './components/StaysChart.vue'
import StaysList from './components/StaysList.vue'

const loading = ref(false)
const stays = shallowRef([])

onMounted(async () => await fetchStays())

async function fetchStays() {
  loading.value = true

  try {
    const response = await fetch('/api/stays')
    const data = await response.json()

    stays.value = data.map(stay => ({
      ...stay,
      startDate: new Date(stay.startDate),
      endDate: stay.endDate ? new Date(stay.endDate) : new Date(),
    }))
  } catch (error) {
    console.error(error)
    stays.value = []
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div v-if="loading">Loading...</div>

  <div v-if="stays.length">
    <StaysChart :stays="stays" />
    <StaysList :stays="stays" />
  </div>
</template>
