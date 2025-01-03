<script setup lang="ts">
definePageMeta({
  title: 'My Nuxt App',
  meta: [
    { name: 'description', content: 'My Nuxt App Description' },
    { name: 'keywords', content: 'nuxt, vuejs, my app' }
  ],
})
import {SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroupContent } from '@/components/ui/sidebar'
</script>

<template>
<div>
  <SidebarProvider>
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>emails</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
  <slot />
</div>
</template>

<style scoped>

</style>