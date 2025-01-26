<script setup lang="ts">
import { cn } from "@/lib/utils"
import {formatDistanceToNow} from "date-fns/formatDistanceToNow"
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useEmails } from '@/composables/useEmails'

const { selected, setSelected } = useEmails()

defineProps({
  items: {
    type: Array<any>,
    required: true,
  }
})

const getBadgeVariantFromLabel = (label: string) => {
 if (["work"].includes(label.toLowerCase())) {
   return 'default'
 }
 if (["personal"].includes(label.toLowerCase())) {
   return 'outline'
 }
 return 'secondary'
}
</script>

<template>
  <ScrollArea class="h-screen">
    <div class="flex flex-col gap-2 p-4 pt-0">
      <template v-for="item in items" :key="item.id">
        <button :class="cn(
            'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
             selected === item.id ? 'bg-muted' : '')" @click="setSelected(item.id)">
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-center">
              <div class="flex items-center gap-2">
                <div class="font-semibold">
                  {{ item.name }}
                  <span class="flex h-2 w-2 rounded-full bg-blue-600" v-if="!item.read"></span>
                </div>
                <div :class="cn(
                    'ml-auto text-xs',
                    selected === item.id ? 'text-foreground' : 'text-muted-foreground')">
                  {{ formatDistanceToNow(new Date(item.date), { addSuffix: true }) }}
                </div>
              </div>
              <div class="text-xs font-medium">
                {{ item.subject }}
              </div>
            </div>
            <div class="line-clamp-2 text-xs text-muted-foreground">
            {{ item.text.slice(0, 300) }}...
            </div>
            <div class="flex items-center gap-2" v-if="item.labels.length > 0">
              <template v-for="label in item.labels" :key="label">
                <Badge :variant="getBadgeVariantFromLabel(label)">{{ label  }}</Badge>
              </template>
            </div>
          </div>
        </button>
      </template>
    </div>
  </ScrollArea>
</template>

<style scoped>

</style>