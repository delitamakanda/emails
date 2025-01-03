<script setup lang="ts">
import { ref } from 'vue'

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
      <i class="fas fa-plus"></i>
      <button @click="composeEmail">Nouveau message</button>
    </div>

</div>
</template>

<style scoped lang="scss">
.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #f5f5f5;
  transition: all 0.3s ease;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #333;

  nav ul {
    list-style: none;
    padding: 0;
    width: 100%;
  }

  nav ul li {
    margin: 20px 0;
    text-align: left;
  }

  nav a {
    color: #333;
    text-decoration: none;
    display: block;
    padding: 10px;

    &:hover {
      background-color: #ddd;
      text-decoration: underline;
    }
  }
}
.compose-button {
  margin-top: auto;
  padding: 10px 20px;
}
button {
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
}
</style>