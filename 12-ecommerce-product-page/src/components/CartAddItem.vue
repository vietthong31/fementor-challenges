<script setup>
import { ref, computed } from 'vue'
import IconMinus from './icons/IconMinus.vue'
import IconPlus from './icons/IconPlus.vue'
import IconCart from './icons/IconCart.vue'

const emit = defineEmits(['submit'])
const amount = ref(0)
const inputAmount = ref(null)
const isDisable = computed(() => amount.value === 0)

function handleClick() {
  if (amount.value === 0) {
    inputAmount.value.select()
  } else {
    emit('submit', amount)
  }
}
</script>

<template>
  <div id="form-add">
    <div>
      <button class="change-amount" @click="amount--" :disabled="isDisable"><IconMinus /></button>
      <input ref="inputAmount" type="text" :value="amount" />
      <button class="change-amount" @click="amount++"><IconPlus /></button>
    </div>
    <button class="add" @click="handleClick">
      <IconCart class="cart" />
      Add to cart
    </button>
  </div>
</template>

<style scoped>
#form-add {
  margin-top: 2rem;
  column-gap: 1rem;
}

#form-add,
#form-add > div {
  display: flex;
  align-items: center;
}

#form-add > div {
  border-radius: 10px;
  overflow: hidden;
}

#form-add > div > * {
  padding: 0;
  width: 50px;
  background-color: var(--color-light-grayish-blue);
}

.change-amount {
  border-radius: 0;
  font-size: 20px;
}

.change-amount svg {
  fill: var(--color-orange);
}

.change-amount:hover svg {
  filter: opacity(50%);
}

.cart {
  display: inline-block;
  fill: white;
  margin-right: 10px;
  transform: scale(0.7);
}

@media (max-width: 414px) {
  #form-add {
    flex-direction: column;
    align-items: stretch;
    row-gap: 10px;
  }

  #form-add > div {
    justify-content: space-between;
  }
}
</style>
