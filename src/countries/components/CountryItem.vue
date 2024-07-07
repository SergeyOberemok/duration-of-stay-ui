<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  country: { type: Object, required: true }
})

const { country } = props
</script>

<template>
  <div class="flex">
    <div class="me-1">{{ country.name }}</div>
    <div class="flex">
      <div class="me-1" v-for="city in country.cities" :key="city.id">{{ city }}</div>
    </div>
  </div>
</template>
