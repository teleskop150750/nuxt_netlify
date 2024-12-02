<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLink to="/"> Home </NuxtLink>
    <NuxtLink to="/reviews/"> Reviews </NuxtLink>

    <main>
      <slot></slot>
    </main>
  </div>
</template>
