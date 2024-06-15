<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  value: boolean,
  trueColor?: string,
  falseColor?: string
}>()
</script>

<template>
  <svg v-if="value" class="w-5 h-5 md:w-6 md:h-6" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :color="trueColor ?? '#80ed99'">
    <path d="M5 13L9 17L19 7" :stroke="trueColor ?? '#80ed99'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  <svg v-if="!value" class="w-5 h-5 md:w-6 md:h-6" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :color="falseColor ?? '#e63946'">
    <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" :stroke="falseColor ?? '#e63946'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
</template>