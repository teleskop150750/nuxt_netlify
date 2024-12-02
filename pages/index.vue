<script setup lang="ts">
const { data } = await useAsyncData(
  'home',
  async () => {
    const response = await $fetch('https://jsonplaceholder.typicode.com/todos');

    return response;
  },
  { deep: false }
);
</script>

<template>
  <div>
    <h1>Home</h1>

    <pre>{{ data }}</pre>
  </div>
</template>
