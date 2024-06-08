<script setup>
import { ref } from 'vue'
import ProductPhoto from './ProductPhoto.vue'

import IconClose from './icons/IconClose.vue'
import IconNext from './icons/IconNext.vue'
import IconPrevious from './icons/IconPrevious.vue'

const child = ref(null)
</script>

<template>
  <div class="lightbox">
    <ProductPhoto ref="child">
      <button class="close" @click="$emit('toggleLightbox')"><IconClose /></button>
      <button class="previous" @click="child.previousImage"><IconPrevious /></button>
      <button class="next" @click="child.nextImage"><IconNext /></button>
    </ProductPhoto>
  </div>
</template>

<style scoped>
:deep(.thumbnails) {
  gap: 0 30px;
  padding: 0 30px;
}

.lightbox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 0.7);
  margin: 0 auto;
  z-index: 2;
}

.lightbox button {
  position: absolute;
  padding: 0;
  border-radius: 100%;
  z-index: 2;
}

.lightbox .photo {
  justify-items: center;
  width: 500px;
}

.lightbox .thumbnails {
  gap: 30px;
  padding: 0 40px;
}

.next,
.previous {
  background-color: white;
  top: 40%;
  stroke: black;
}

.next:hover,
.previous:hover {
  stroke: var(--color-orange);
}

.close {
  top: -30px;
  right: 6px;
  min-width: fit-content;
  height: fit-content;
  background-color: transparent;
  fill: var(--color-orange);
}

.next {
  right: -25px;
}

.previous {
  left: -25px;
}
</style>
