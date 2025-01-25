<script setup lang="ts">
import { cn } from "@/lib/utils"
import { Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from '@/components/ui/select';
const props = defineProps({
  isCollapsed: {
    type: Boolean,
    default: false,
  },
  accounts: {
    type: Array<{ email: string; label: string; icon: any; }>,
    default: () => [],
  }
});

const selectedAccount = ref(props.accounts[0] ?? { email: '', label: '', icon: null });

const setSelectedAccount = (email: string) => {
  return selectedAccount.value = props.accounts.find((a) => a.email === email)!;
};
</script>

<template>
<Select :defaultValue="selectedAccount?.email"  @update:modelValue="setSelectedAccount">
  <SelectTrigger :class="cn(
      'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0',
      isCollapsed? 'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden' : ''
  )" aria-label="Select account">
    <SelectValue placeholder="Select an account">
      <span :class="cn('ml-2', {
        isCollapsed: 'hidden',
      })">{{ selectedAccount?.label }}</span>
    </SelectValue>
  </SelectTrigger>
  <SelectContent>
    <template v-for="account in props.accounts" :key="account.email">
      <SelectItem :value="account.email">
        <div class="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
          <account.icon />
          {{ account?.email }}
        </div>
      </SelectItem>
    </template>
  </SelectContent>
</Select>
</template>

<style scoped>

</style>