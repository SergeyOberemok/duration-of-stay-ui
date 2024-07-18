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
  <div class="flex w-full">
    <div class="flex w-full md:w-1/2">
      <div class="flex me-3">
        <div class="me-1">{{ stay.startIsoDate }}</div>
        <span>-</span>
        <div class="ms-1">{{ stay.endIsoDate }}</div>
      </div>

      <Country :country="stay.country" />
    </div>

    <div class="w-1/4 hidden md:block">{{ stay.title }}</div>

    <div class="w-1/4 hidden md:block">{{ stay.daysDuration }}</div>
  </div>
</template>
