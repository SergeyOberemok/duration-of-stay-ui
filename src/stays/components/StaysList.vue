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
  <div class="container mx-auto">
    <div v-for="stay in stays" :key="stay.id">
      <StayItem :stay="stay" />
    </div>
  </div>
</template>
