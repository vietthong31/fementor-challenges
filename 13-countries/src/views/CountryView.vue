<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const country = ref(null)
const borders = ref([])

watch(() => route.params.name, fetchData, { immediate: true })

async function fetchData(name) {
  let response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  const data = await response.json()
  if (response.status === 404) {
    router.push({
      name: 'NotFound',
      params: { pathMatch: route.path.substring(1).split('/') },
      query: route.query,
      hash: route.hash
    })
  } else {
    country.value = data[0]
    if (country.value.borders.length > 0) {
      const codes = country.value.borders.join(',')
      response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name`)
      borders.value = await response.json()
    }
  }
}
</script>

<template>
  <main>
    <RouterLink
      to="/"
      class="rounded border p-[0.25rem_0.5rem] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] dark:bg-blue"
      ><i class="fa-solid fa-arrow-left"></i> Back</RouterLink
    >
    <div
      v-if="country"
      class="mobile:grid-cols-1 mobile:grid-rows-[auto_auto] mobile:gap-10 mt-10 grid grid-cols-[40%_auto] gap-40 md:gap-10"
    >
      <img :src="country.flags.svg" :alt="`${country.name} flag`" class="outline outline-1" />
      <div class="self-center">
        <h1 class="text-3xl font-extrabold">{{ country.name.common }}</h1>
        <div class="mobile:flex-col mobile:gap-10 mt-6 flex justify-between md:gap-10">
          <ul>
            <li>
              <span>Native name:</span> {{ Object.values(country.name.nativeName)[0].official }}
            </li>
            <li><span>Population: </span> {{ country.population.toLocaleString('en') }}</li>
            <li><span>Region: </span> {{ country.region }}</li>
            <li><span>Sub Region:</span> {{ country.subregion }}</li>
            <li><span>Capital:</span> {{ country.capital.join(', ') }}</li>
          </ul>
          <ul>
            <li><span>Top Level Domain:</span> {{ country.tld.join(', ') }}</li>
            <li>
              <span>Currencies:</span>
              {{
                Object.values(country.currencies)
                  .map((c) => c.name)
                  .join(', ')
              }}
            </li>
            <li><span>Languages:</span> {{ Object.values(country.languages).join(', ') }}</li>
          </ul>
        </div>
        <p class="flex flex-wrap gap-2">
          <span class="font-bold">Border countries: </span>
          <RouterLink
            v-for="(b, index) in borders"
            :key="index"
            :to="`/country/${b.name.common}`"
            class="border px-2 dark:bg-blue"
            >{{ b.name.common }}</RouterLink
          >
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
li span {
  font-weight: bold;
}
</style>
