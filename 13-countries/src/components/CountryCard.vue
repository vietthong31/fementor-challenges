<script setup>
defineProps({
  country: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="block h-[100%] overflow-hidden rounded-md shadow-[0px_0px_6px_0px_rgba(0,0,0,0.45)] dark:bg-blue"
  >
    <img :src="country.flags.png" alt="" class="h-[200px] w-[100%]" />
    <div class="px-4">
      <h2 class="mb-3 mt-4 text-lg font-extrabold hover:underline">
        <RouterLink :to="`/country/${country.name.common}`">
          {{ country.name.common }}
        </RouterLink>
      </h2>
      <ul class="pb-5">
        <li>
          <span class="font-bold">Population:</span> {{ country.population.toLocaleString('en') }}
        </li>
        <li><span class="font-bold">Region:</span> {{ country.region }}</li>
        <li><span class="font-bold">Capital:</span> {{ country.capital.join(', ') }}</li>
      </ul>
    </div>
  </div>
</template>
