<script setup>
const { data: count } = await useFetch('http://localhost:3000/')
</script>

<template>
  <div v-for="n in count">
    <span>{{ n }}</span>
  </div>
</template>
