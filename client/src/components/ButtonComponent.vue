<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  text: string,
  active?: boolean
}>()
</script>

<template>
  <input type="button" :value="text" :disabled="active === undefined ? false : !active"
    class="bg-main disabled:bg-gray-400 text-white text-2xl 
    w-40 py-1 rounded-md md:w-52 md:py-1.5 md:rounded-lg shadow-md md:shadow-lg 
    hover:cursor-pointer hover:bg-main-hover active:bg-main-active">

</template>