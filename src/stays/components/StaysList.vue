<script setup>
import { defineProps } from 'vue'
import StayItem from './StayItem.vue'

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
  <div v-for="stay in stays" :key="stay.id">
    <StayItem :stay="stay" />
  </div>
</template>
