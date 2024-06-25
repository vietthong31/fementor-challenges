<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import CountryCard from '../components/CountryCard.vue'

const countries = ref(null)
const searchText = ref(null)
const filteredCountries = ref(null)

const isMenuOpen = ref(false)
const menu = ref(null)

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
const selectedRegion = ref(null)

function findCountry() {
  filteredCountries.value = countries.value.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.value.toLowerCase())
  )
}

function selectRegion(region) {
  if (region !== selectedRegion.value) {
    selectedRegion.value = region
    filteredCountries.value = countries.value.filter((country) => country.region === region)
  } else {
    selectedRegion.value = null
    filteredCountries.value = countries.value
  }
  isMenuOpen.value = false
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Close dropdown menu when click outside
function handleClickOutside(event) {
  if (!menu.value.contains(event.target)) {
    isMenuOpen.value = false
  }
}

onBeforeMount(() => {
  fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags')
    .then((res) => res.json())
    .then((data) => {
      data.sort((a, b) => a.name.common.localeCompare(b.name.common))
      countries.value = data
      filteredCountries.value = data
    })
})

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
</script>

<template>
  <main>
    <div class="flex justify-between gap-4 mobile:flex-col">
      <div class="flex w-96 items-center rounded-md border py-2 mobile:w-auto dark:bg-blue">
        <i class="fa-solid fa-magnifying-glass mx-6"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          class="mr-2 grow focus:outline-none"
          v-model="searchText"
          @keyup.enter="findCountry"
        />
      </div>
      <div ref="menu" class="relative">
        <BaseButton
          class="flex w-52 items-center justify-between rounded-md border px-5 py-2 dark:bg-blue"
          @click="toggleMenu"
        >
          Filter by Region
          <i class="fa-solid fa-angle-down"></i>
        </BaseButton>
        <ul
          v-show="isMenuOpen"
          class="absolute top-[110%] w-52 rounded-md border bg-white py-2 dark:bg-blue"
        >
          <li
            v-for="(region, index) in regions"
            :key="index"
            :class="`${selectedRegion === region ? 'bg-slate-300 dark:bg-background-dark' : ''} my-2 cursor-pointer px-5 hover:bg-slate-300 hover:dark:bg-background-dark`"
            @click="selectRegion(region)"
          >
            {{ region }}
          </li>
        </ul>
      </div>
    </div>
    <ul
      class="mt-14 grid auto-rows-fr grid-cols-4 justify-between gap-14 md:grid-cols-2 mobile:grid-cols-1"
    >
      <li v-for="(country, index) in filteredCountries" :key="index">
        <CountryCard :country />
      </li>
    </ul>
  </main>
</template>
