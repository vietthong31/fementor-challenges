<script setup>
import { inject } from 'vue'
import IconDelete from './icons/IconDelete.vue'
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const removeItem = inject('removeItem')

const { name, price, discount, thumbnail } = props.item.product
const discountPrice = price * (discount / 100)
</script>

<template>
  <div>
    <img :src="thumbnail" alt="" width="50" />
    <p class="item-description">
      {{ name }} <br />
      ${{ discountPrice }} x {{ item.amount }}
      <span class="total-price">${{ discountPrice * item.amount }}</span>
    </p>
    <button @click="removeItem(item.product.name)"><IconDelete /></button>
  </div>
</template>

<style scoped>
button {
  padding: 0;
  background-color: transparent;
  min-width: 20px;
  height: min-content;
}

img {
  border-radius: 10px;
}

.item {
  display: flex;
  align-items: center;
  column-gap: 14px;
}

.item-description {
  line-height: 1.6;
}

.total-price {
  color: black;
  font-weight: bold;
}
</style>
