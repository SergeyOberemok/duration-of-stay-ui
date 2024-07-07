<script setup>
import { defineProps } from 'vue'
import Country from '@/countries/components/CountryItem.vue'

const props = defineProps({
  stay: {
    type: Object,
    required: true
  }
})

const stay = props.stay
</script>

<template>
  <div class="flex">
    <div class="me-1">{{ stay.title }}</div>
    <Country :country="stay.country" />

    <div class="flex me-1">
      <div class="me-1">{{ stay.startIsoDate }}</div>
      <span>-</span>
      <div class="ms-1">{{ stay.endIsoDate }}</div>
    </div>

    <div>{{ stay.daysDuration }}</div>
  </div>
</template>
