<script setup lang="ts">
import { useRouter } from 'vue-router'
import ButtonComponent from '../components/ButtonComponent.vue'

const router = useRouter()
</script>

<template>
  <main>
    <div class="h-full flex flex-col justify-center">
      <h1 class="text-4xl text-center px-2 mx-auto max-w-[800px]">Welcome to the RTC Message Bridge!</h1>
      <p class="text-2xl text-justify px-2 mt-10 mx-auto max-w-[800px]">
        Here you can create a room with a <span class="text-main">client-to-client connection</span>
        where you can transfer messages, images, and files between devices
        without the need for registration
      </p>
      <div class="flex justify-center mt-10">
        <ButtonComponent :text="'Start now'" class="w-48 md:w-60" @click="$router.push('select-room')" />
      </div>
    </div>
  </main>
</template>