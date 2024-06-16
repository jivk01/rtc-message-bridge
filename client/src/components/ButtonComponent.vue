<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  text: string,
  disabled?: boolean
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <input type="button" :value="text" :disabled class="bg-main disabled:bg-gray-400 text-white text-2xl 
    w-40 py-1 rounded-md md:w-52 md:py-1.5 md:rounded-lg shadow-md md:shadow-lg 
    disabled:cursor-default hover:cursor-pointer hover:bg-main-hover active:bg-main-active transition-colors"
    @click="event => $emit('click', event)">

</template>