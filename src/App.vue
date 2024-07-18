<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav class="hidden">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/stays">Stays</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
