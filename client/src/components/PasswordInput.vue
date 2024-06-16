<script setup lang="ts">
import { defineProps, defineModel } from 'vue'

defineProps<{
  placeholder: string
}>()

const model = defineModel()
</script>

<template>
  <div class="min-w-72 min-h-10">
    <input type="password"
      class="w-full h-full border-2 p-2.5 border-main rounded-md focus:outline-none focus:shadow-md text-base md:text-lg" :placeholder
      v-model="model">
  </div>
</template>