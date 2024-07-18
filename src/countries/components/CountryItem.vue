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
    <div class="hidden md:flex">
      <div
        v-for="(city, index) in country.cities"
        :key="city.id"
        :class="index == country.cities.length - 1 ? 'me-1' : ''"
      >
        {{ city }}
      </div>
    </div>
  </div>
</template>
