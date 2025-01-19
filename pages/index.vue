<script setup lang="ts">
import { mails, accounts } from '@/data'
const layout = useCookie("resizable-panels:layout:mail")
const collapsed = useCookie("resizable-panels:collapsed")

const defaultLayout = layout ? layout.value : undefined
const defaultCollapsed = collapsed ? collapsed.value : undefined
</script>

<template>
  <div>
    <div class="md:hidden">
      <NuxtImg
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          class="hidden dark:block"
      />
      <NuxtImg
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          class="block dark:hidden"
      />
    </div>
    <div class="hidden flex-col md:flex">
      <EmailList :accounts="accounts" :mails="mails" />
    </div>
  </div>

</template>

<style scoped>

</style>