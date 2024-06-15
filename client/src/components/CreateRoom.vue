<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue'
import PasswordInput from './PasswordInput.vue'
import BooleanIndicator from './BooleanIndicator.vue'

import { ref, computed } from 'vue'

const password = ref('')

const isValid = computed(() => {
  return /[a-zA-Z]/.test(password.value) && /[0-9]/.test(password.value) && password.value.length > 5
})
</script>

<template>
  <div class="flex flex-col items-center">
    <h2 class="text-3xl md:text-4xl">Create a new room</h2>
    <PasswordInput :placeholder="'choose a password for your room'" class="w-4/5 max-w-80 h-10 mt-5" v-model="password"/>
    <div class="flex items-center space mt-1">
      <p class="text-xs lg:text-sm text-right">at least 6 characters including numbers and letters</p>
      <BooleanIndicator :value="isValid"/>
    </div>
    <ButtonComponent class="mt-5" :text="'Create'" :disabled="!isValid" @click="() => console.log(password)"/>
  </div>
</template>