<script setup>
import { ref } from 'vue'

const isDarkMode = ref(false)

function toggleDarkMode() {
  const html = document.documentElement
  if (isDarkMode.value) {
    html.classList.remove('dark')
    isDarkMode.value = false
  } else {
    html.classList.add('dark')
    isDarkMode.value = true
  }
}
</script>

<template>
  <header class="mobile:px-6 mb-10 flex justify-between border-b-2 px-16 py-4">
    <h1 class="mobile:text-lg text-2xl font-extrabold"><a href="/">Where in the world?</a></h1>
    <BaseButton @click="toggleDarkMode" class="font-bold">
      <i
        v-if="!isDarkMode"
        class="fa-solid fa-moon -translate-x-1 translate-y-[1px] -rotate-[30deg]"
      ></i>
      <i v-else class="fa-solid fa-sun"></i>
      {{ isDarkMode ? 'Light' : 'Dark' }} Mode
    </BaseButton>
  </header>
  <RouterView />
</template>

<style>
* {
  @apply dark:border-blue dark:outline-blue;
}

body {
  @apply dark:bg-background-dark dark:text-text-dark;
}

header,
input {
  @apply dark:bg-blue;
}

main {
  @apply mobile:px-6 px-16 pb-16;
}
</style>
