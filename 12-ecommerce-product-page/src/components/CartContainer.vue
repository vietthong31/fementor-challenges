<script setup>
import { ref, computed } from 'vue'
import IconCart from './icons/IconCart.vue'
import CartItem from './CartItem.vue'

const props = defineProps({
  cartItems: {
    type: Array
  }
})

const itemsVisible = ref(false)

const totalAmount = computed(() => {
  return props.cartItems.reduce((result, currentValue) => result + currentValue.amount, 0)
})

function toggleItems() {
  itemsVisible.value = !itemsVisible.value
}
</script>

<template>
  <div class="cart-container">
    <div>
      <span>{{ totalAmount }}</span>
      <button @click="toggleItems"><IconCart class="cart" /></button>
    </div>
    <div class="items" v-show="itemsVisible">
      <h2>Cart</h2>
      <template v-if="totalAmount >= 1">
        <CartItem v-for="(item, i) of cartItems" :item :key="i" class="item" />
        <button class="checkout">Checkout</button>
      </template>
      <span v-else class="empty">Your cart is empty.</span>
    </div>
  </div>
</template>

<style scoped>
.empty {
  text-align: center;
  font-weight: bold;
}

.cart-container {
  position: relative;
  margin-left: auto;
  margin-right: 1rem;
}

.cart-container > div:first-child span {
  position: absolute;
  top: -14px;
  right: -10px;
  padding: 3px 8px;
  background-color: var(--color-orange);
  border-radius: 40%;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
}

div {
  line-height: 1;
}

button:not(.checkout) {
  padding: 0;
  background-color: transparent;
  min-width: 20px;
  height: min-content;
}

.cart {
  fill: var(--color-dark-grayish-blue);
}

.cart:hover {
  fill: black;
}

.items {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: #fff;
  position: absolute;
  top: 40px;
  left: -200px;
  min-width: 300px;
  width: max-content;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 10px 20px rgb(0 0 0 / 0.3);
  z-index: 10;
}

.items > * {
  padding: 10px;
}

.items h2 {
  font-size: 1rem;
  font-weight: bold;
  color: black;
}

@media (max-width: 800px) {
  .items {
    min-width: 350px;
    top: 50px;
    left: -310px;
  }
}
</style>
