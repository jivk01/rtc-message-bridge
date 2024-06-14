<script setup lang="ts">
import { RouterView } from 'vue-router'
import GithubLink from './components/GithubLink.vue'
</script>

<template>
  <div class="h-full flex flex-col">
    <RouterView class="h-full"/>
    <GithubLink />
  </div>
</template>
