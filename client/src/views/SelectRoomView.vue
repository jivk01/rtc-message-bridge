<script setup lang="ts">
import RoomCodeInput from '../components/RoomCodeInput.vue'
import CreateRoom from '../components/CreateRoom.vue'
</script>

<template>
  <main class="flex flex-col justify-center lg:flex-row lg:items-center lg:space-x-10 smrotated:flex-row smrotated:items-center smrotated:space-x-2">
    <RoomCodeInput @join="console.log" class="px-2 lg:w-2/5 lg:max-w-[500px]"/>
    <div class="flex lg:flex-col smrotated:flex-col items-center justify-center p-2 my-12 lg:my-0 smrotated:my-0 lg:h-full smrotated:h-full">
      <div class="w-full h-[1px] bg-black lg:h-full lg:max-h-60 lg:w-[2px] smrotated:h-full smrotated smrotated:w-[2px]"></div>
      <div class="p-2 text-2xl">OR</div>
      <div class="w-full h-[1px] bg-black lg:h-full lg:max-h-60 lg:w-[2px] smrotated:h-full smrotated:max-h-60 smrotated:w-[2px]"></div>
    </div>
    <CreateRoom class="lg:w-2/5 lg:max-w-[500px]"/>
  </main>
</template>