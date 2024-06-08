<script setup>
defineProps({
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <template v-if="discount > 0">
    <div>
      <span class="price">${{ price * (discount / 100) }}</span>
      <span class="discount">{{ discount }}%</span>
    </div>
    <span class="real-price">${{ price }}</span>
  </template>
  <span v-else class="price">${{ price }}</span>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
}

.price {
  color: black;
  font-size: 1.6rem;
  font-weight: 700;
  margin-right: 20px;
}

.real-price {
  color: var(--color-grayish-blue);
  font-weight: 700;
  text-decoration: line-through;
}

.discount {
  background-color: var(--color-pale-orange);
  color: var(--color-orange);
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
}

@media (max-width: 414px) {
  div {
    display: inline flex;
  }

  .description {
    text-align: justify;
  }

  .real-price {
    float: right;
  }
}
</style>
