<script setup lang="ts">
const props = defineProps({
  accounts: {
    type: Array,
    required: true
  },
  mails: {
    type: Array,
    required: true
  },
  defaultLayout: {
    type: Array,
    default: [20, 32, 48],
  },
  defaultCollapsed: {
    type: Boolean,
    default: false,
  },
  navCollapsedSize: {
    type: Number,
  }
})
import { cn } from "@/lib/utils"
import type { Mail, Account } from '@/data'
import { useMail } from '@/composables/useEmails'

const { selected, setSelected } = useMail()
</script>

<template>
<div>
  <div v-for="account in accounts as Account[]" :key="Math.max(Math.random())">
    <div :class="cn('account', { 'active': selected })">
      <div class="account-icon">
        <!-- Account Icon -->
      </div>
      <div class="account-info">
        <div class="account-name">{{ account.label }}</div>
        <div class="account-mail">{{ account.email }}</div>
      </div>
    </div>
  </div>
  <div v-for="mail in mails as Mail[]" :key="Math.max(Math.random())">
    <div :class="cn('mail', { 'active': selected === mail.id })">
      <div class="mail-icon">
        <!-- Mail Icon -->
      </div>
      <div class="mail-info">
        <div class="mail-subject">{{ mail.subject }}</div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>