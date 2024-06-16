<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from 'vue'
import PasswordInput from './PasswordInput.vue';
import ButtonComponent from './ButtonComponent.vue';

const emit = defineEmits<{
  password: [string],
  close: [void]
}>()

defineProps<{
  roomCode: string,
  isOpen: boolean
}>()

const password = ref('')
const isValid = computed(() => {
  return /[a-zA-Z]/.test(password.value) && /[0-9]/.test(password.value) && password.value.length > 5
})

function closePopup() {
  password.value = ''
  emit('close')
}
</script>

<template>
  <dialog :open="isOpen"
    class="w-svw h-svh bg-[rgba(178,203,239,.37)] backdrop-blur-sm flex justify-center items-center collapse open:visible">
    <div class="bg-white w-full max-w-[420px] m-5 p-5 text-2xl md:text-3xl z-10 rounded-3xl">
      <h2 class="text-center">Room #{{ roomCode }}</h2>
      <PasswordInput :placeholder="'enter the password'" v-model="password" class="mt-5 h-10 md:h-12" />
      <div class="flex justify-between space-x-4 md:space-x-8 mt-5">
        <ButtonComponent @click="closePopup" :text="'Close'"/>
        <ButtonComponent @click="console.log(password)" :text="'Join'" :disabled="!isValid"/>
      </div>
    </div>
  </dialog>
</template>