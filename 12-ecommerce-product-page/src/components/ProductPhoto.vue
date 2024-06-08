<script setup>
import { ref } from 'vue'

import IconNext from './icons/IconNext.vue'
import IconPrevious from './icons/IconPrevious.vue'

import image1 from '@/assets/image-product-1.jpg'
import image2 from '@/assets/image-product-2.jpg'
import image3 from '@/assets/image-product-3.jpg'
import image4 from '@/assets/image-product-4.jpg'

import thumbnail1 from '@/assets/image-product-1-thumbnail.jpg'
import thumbnail2 from '@/assets/image-product-2-thumbnail.jpg'
import thumbnail3 from '@/assets/image-product-3-thumbnail.jpg'
import thumbnail4 from '@/assets/image-product-4-thumbnail.jpg'

defineProps({
  lightboxVisible: {
    type: Boolean,
    default: false
  }
})

defineExpose({ nextImage, previousImage })

const images = [
  { full: image1, thumbnail: thumbnail1, active: true },
  { full: image2, thumbnail: thumbnail2, active: false },
  { full: image3, thumbnail: thumbnail3, active: false },
  { full: image4, thumbnail: thumbnail4, active: false }
]

const index = ref(0)
const selectedImage = ref(images[0])

function changeSelectedImage(index) {
  const image = images[index]
  console.log(image)
  if (!image.active) {
    selectedImage.value.active = false
    image.active = true
    selectedImage.value = image
  }
}

function nextImage() {
  if (index.value < 3) {
    changeSelectedImage(index.value + 1)
    index.value += 1
  }
}

function previousImage() {
  if (index.value > 0) {
    changeSelectedImage(index.value - 1)
    index.value -= 1
  }
}
</script>

<template>
  <div class="photo">
    <slot></slot>
    <button class="previous" @click="previousImage"><IconPrevious /></button>
    <button class="next" @click="nextImage"><IconNext /></button>
    <div class="full">
      <div v-for="(image, i) in images" :key="i" :class="`${image.active ? 'active' : ''}`">
        <img :src="image.full" @click="$emit('toggleLightbox', true)" />
      </div>
    </div>
    <div class="thumbnails">
      <div
        v-for="(image, i) in images"
        class="thumbnail-container"
        :key="i"
        @click="changeSelectedImage(i)"
      >
        <img
          :class="`thumbnail ${selectedImage.thumbnail === image.thumbnail ? 'selected' : ''}`"
          :src="image.thumbnail"
          width="80"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.photo {
  position: relative;
}

.thumbnails {
  display: flex;
  gap: 20px;
}

.thumbnail-container {
  position: relative;
  line-height: 1;
  overflow: hidden;
}

.thumbnail-container:has(.selected)::before,
.thumbnail-container:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255 255 255 / 0.5);
}

.thumbnail-container:hover::before {
  background-color: rgb(255 255 255 / 0.3);
}

.thumbnail-container img {
  display: block;
  width: 100%;
}

.thumbnail-container:has(.selected) {
  outline: 3px solid var(--color-orange);
}

.thumbnail-container {
  border-radius: 10px;
}

.full:hover,
.thumbnail-container:hover {
  cursor: pointer;
}

.full {
  position: relative;
  grid-column: 1/-1;
  display: flex;
  overflow: hidden;
  margin-bottom: 30px;
}

.full div {
  flex-shrink: 0;
  width: 100%;
}

.full img {
  border-radius: 10px;
  width: 100%;
}

.active {
  order: -1;
}

.previous,
.next {
  display: none;
  min-width: 40px;
  height: 40px;
  position: absolute;
  padding: 0;
  border-radius: 100%;
  z-index: 2;
  background-color: #fff;
  top: 40%;
  stroke: black;
}

.next {
  right: 10px;
}

.previous {
  left: 10px;
}

@media (max-width: 811px) {
  .previous,
  .next {
    display: flex;
  }
}

@media (max-width: 1279px) {
  .thumbnails {
    display: none;
  }

  .full {
    margin-bottom: 0;
  }

  .full img {
    border-radius: 0;
  }
}
</style>
