<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  stays: {
    type: Array,
    required: true
  }
})

const stays = props.stays
</script>

<template>
  <h3>Stays</h3>
  <div v-for="stay in stays" :key="stay._id">
    {{ stay.title }}
  </div>
</template>
