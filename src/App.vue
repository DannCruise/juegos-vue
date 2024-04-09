<script setup>
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
</script>

<template>
  <Menu></Menu>
  <div class="container-fluid mt-3">
    <RouterView />
  </div>
</template>

