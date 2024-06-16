<script setup lang="ts">
import { reactive, defineEmits } from 'vue'

const emits = defineEmits<{
  join: [code: string]
}>()

const chars: string[] = reactive(['', '', '', '', '', ''])

function handleInput(event: KeyboardEvent, index: number) {
  event.preventDefault()
  
  if (/^[a-zA-Z0-9]$/.test(event.key)) {
    chars[index] = event.key.toUpperCase()
    if (index === 5) {
      const input = event.target as HTMLInputElement
      input.blur()
      emits('join', chars.reduce((acc, char) => acc + char, ''))
    } else moveRight(index)
  }

  if (event.key === 'Backspace') {
    chars[index] = ''
    moveLeft(index)
  }
}
function moveLeft(index: number) {
  if (index > 0) {
    const previousInput = document.querySelector(`#room-code-container input:nth-child(${index})`) as HTMLInputElement
    previousInput.focus()
  }
}
function moveRight(index: number) {
  if (index < chars.length - 1) {
    const nextInput = document.querySelector(`#room-code-container input:nth-child(${index + 2})`) as HTMLInputElement
    nextInput.focus()
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <h2 class="text-3xl md:text-4xl text-center">Join the existing room</h2>
    <h3 class="text-2xl md:text-3xl text-center mt-6">Enter the room code here:</h3>
    <div class="flex space-x-3 mt-3" id="room-code-container">
      <input type="text" v-for="_, index in chars" :key="index" class="w-9 h-12 text-2xl md:w-12 md:h-16 md:text-3xl text-center border-2 border-main rounded-lg 
        transition-all duration-800 caret-transparent focus:outline-none focus:shadow-md" v-model="chars[index]"
        :class="chars[index].length > 0 ? 'bg-main text-white focus:bg-main-hover' : 'focus:bg-slate-100'"
        @keydown="event => handleInput(event, index)" @keydown.left="moveLeft(index)" @keydown.right="moveRight(index)">
    </div>
  </div>

</template>