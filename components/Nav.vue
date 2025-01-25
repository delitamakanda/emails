<script setup lang="ts">
import { cn } from "@/lib/utils"
import { buttonVariants } from '@/components/ui/button'
import type {LucideIcon} from "lucide-vue-next"
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface Link {
  title: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
}

defineProps({
  isCollapsed: { type: Boolean, default: false },
  links: {
    type: Array,
    default: () => [] as Link[]}
})
</script>

<template>
  <div
      :data-collapsed="isCollapsed"
      class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
  >
    <nav class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
      <template v-for="(link, index) in links as Link[]" :key="index">
        <template v-if="isCollapsed">
          <Tooltip :key="index" :delayDuration="0">
            <TooltipTrigger asChild>
              <NuxtLink
                  href="#"
                  class=""
              >

              <span class="sr-only">{link.title}</span>
              </NuxtLink>
            </TooltipTrigger>
            <TooltipContent side="right" class="flex items-center gap-4">
              {link.title}

              <span v-if="link.label" class="ml-auto text-muted-foreground">
                    {link.label}
                  </span>

            </TooltipContent>
          </Tooltip>
        </template>
        <template v-else>
          <NuxtLink
              :key="index"
              href="#"
              :class="cn(
                  buttonVariants({ variant: link.variant, size: 'sm' }),
                  {
                    'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white': link.variant === 'default',
                    'justify-start': link.variant === 'ghost',
                  }
              )"
          >
            <link.icon class="mr-2 h-4 w-4" />
            {{ link.title }}

          <span v-if="link.label" :class="cn('ml-auto',{
          'text-background dark:text-white': link.variant === 'default',
          })">
            {{ link.label }}
          </span>
          </NuxtLink>
        </template>
      </template>
    </nav>
  </div>
</template>

<style scoped>
</style>