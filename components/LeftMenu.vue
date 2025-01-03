<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
interface Link {
  name: string;
  path: string;
  icon: string;
}
const links = ref<Link[]>([
  {
    name: 'Boîte de réception',
    path: '/',
    icon: 'home'
  },
  {
    name: 'Messages envoyés',
    path: '/sent',
    icon:'message-square'
  },
  {
    name: 'Brouillons',
    path: '/draft',
    icon: 'pencil-square'
  },
  {
    name: 'Corbeille',
    path: '/trash',
    icon: 'trash-alt'
  }
])
const composeEmail = () => {
  // Open the compose email modal
  console.log('Compose email')
}
</script>

<template>
<div class="sidebar">
  <!-- Sidebar content -->
  <div class="logo">
    <h1>Emails</h1>
  </div>
    <!-- Navigation links -->
    <nav>
      <ul>
        <li v-for="link in links" :key="link.name">
          <NuxtLink :to="link.path">{{link.name}}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="compose-button">
      <i class="fas fa-plus"/>
      <Button @click="composeEmail">Nouveau message</Button>
    </div>

</div>
</template>

<style scoped lang="scss">

</style>