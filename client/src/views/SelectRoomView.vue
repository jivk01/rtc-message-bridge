<script setup lang="ts">
import RoomCodeInput from '../components/RoomCodeInput.vue'
</script>

<template>
  <main>
    <RoomCodeInput @join="console.log"/>
  </main>
</template>