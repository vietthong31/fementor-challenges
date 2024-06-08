<script setup>
import { ref, provide } from 'vue'

import thumbnail from '@/assets/image-product-1-thumbnail.jpg'

import IconClose from './components/icons/IconClose.vue'
import IconMenu from './components/icons/IconMenu.vue'
import ProductPhoto from './components/ProductPhoto.vue'
import ProductPhotoLightbox from './components/ProductPhotoLightbox.vue'
import ProductPrice from './components/ProductPrice.vue'
import CartAddItem from './components/CartAddItem.vue'
import CartContainer from './components/CartContainer.vue'

const lightboxVisible = ref(false)
const cartItems = ref([])
const sidebar = ref(null)

const menu = ['Collections', 'Men', 'Women', 'About', 'Contract']
const product = {
  thumbnail,
  name: 'Fall Limited Edition Sneakers',
  price: 250,
  discount: 50
}

function toggleLightbox(visible) {
  if (window.innerWidth >= 1280) {
    lightboxVisible.value = visible
  }
}

function addItem(amount) {
  if (cartItems.value.length >= 1) {
    cartItems.value.find((item) => item.product.name === product.name).amount = amount
  } else {
    cartItems.value.push({
      product,
      amount: amount.value
    })
  }
}

function closeSidebar() {
  sidebar.value.style.display = 'none'
}

function openSidebar() {
  sidebar.value.style.display = 'block'
}

provide(
  'removeItem',
  (productName) => (cartItems.value = cartItems.value.filter((i) => i.product.name !== productName))
)
</script>

<template>
  <nav>
    <button class="menu-btn" @click="openSidebar"><IconMenu /></button>
    <img src="@/assets/logo.svg" alt="sneakers" />
    <div class="menu" ref="sidebar">
      <ul>
        <li @click="closeSidebar" class="close-sidebar"><IconClose /></li>
        <li v-for="(m, index) in menu" :key="index">
          <a href="/">{{ m }}</a>
        </li>
      </ul>
    </div>
    <CartContainer :cartItems />
    <img src="@/assets/image-avatar.png" />
  </nav>
  <main>
    <ProductPhoto @toggleLightbox="toggleLightbox" />
    <ProductPhotoLightbox
      v-show="lightboxVisible"
      :lightboxVisible
      @toggleLightbox="toggleLightbox"
    />
    <div>
      <p class="company">SNEAKER COMPANY</p>
      <h1>{{ product.name }}</h1>
      <p class="description">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <ProductPrice :discount="product.discount" :price="product.price" />
      <CartAddItem @submit="addItem" />
    </div>
  </main>
</template>

<style scope>
h1 {
  margin: 1rem 0 2rem 0;
}

.description {
  margin-bottom: 2rem;
}

.company {
  font-size: 0.8rem;
  color: var(--color-orange);
  font-weight: bold;
}

nav {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-grayish-blue);
}

nav ul {
  list-style-type: none;
  display: flex;
  column-gap: 2rem;
  margin-left: 2rem;
}

nav ul .close-sidebar {
  display: none;
}

nav ul li {
  padding: 30px 0;
  border-bottom: 3px solid white;
}

nav ul li:has(a:hover) {
  border-color: var(--color-orange);
}

nav img:last-child {
  width: 40px;
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 12%;
  justify-items: center;
  align-items: center;
  margin: 4% 10% 0 10%;
}

@media (max-width: 414px) {
  h1 {
    font-size: 2rem;
  }

  main > div:last-child {
    padding: 10px 20px 50px 20px;
  }
}

@media (max-width: 799px) {
  main {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin: 0;
  }

  /* nav & sidebar */
  #app {
    position: relative;
  }

  nav {
    padding: 20px;
    align-items: end;
  }

  nav .menu {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgb(0 0 0 / 0.5);
  }

  nav .menu-btn {
    padding: 0;
    min-width: auto;
    height: auto;
    background-color: #fff;
    margin-right: 16px;
  }

  nav ul {
    width: 60%;
    height: 100%;
    padding: 20px 0 0 20px;
    margin: 0;
    flex-direction: column;
    background-color: #fff;
  }

  nav ul .close-sidebar {
    display: list-item;
  }

  nav ul li {
    padding: 10px 0;
  }

  nav ul li a {
    color: black !important;
    font-weight: bold;
  }

  nav img:last-child {
    width: 22px;
  }
}

@media (min-width: 800px) {
  .menu-btn {
    display: none;
  }

  nav ul li svg {
    display: none;
  }

  nav img:last-child {
    width: 40px;
  }
}

@media (min-width: 800px) and (max-width: 1280px) {
  main {
    gap: 0 4%;
    margin: 4% 0;
    align-items: start;
  }
}
</style>
