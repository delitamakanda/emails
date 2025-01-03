<script setup lang="ts">
definePageMeta({
  title: 'My Nuxt App',
  meta: [
    { name: 'description', content: 'My Nuxt App Description' },
    { name: 'keywords', content: 'nuxt, vuejs, my app' }
  ],
})
</script>

<template>
<div>
  <slot />
</div>
</template>

<style scoped>

</style>