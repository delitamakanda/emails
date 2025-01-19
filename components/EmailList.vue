<script setup lang="ts">
import {Inbox, File, ArchiveX, Trash2, Archive, Send } from "lucide-vue-next";

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
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


const { selected, setSelected } = useMail()

const isCollapsed = computed(() => {
  return false
})
const setIsCollapsed = (value: boolean) => {
  props.navCollapsedSize && (props.defaultLayout[2] = value? props.navCollapsedSize : 20)
}

const handleLayout = (sizes: number[]) => {
  document.cookie = `resizable-panels:layout:mail=${JSON.stringify(sizes)}`
}

const handleCollapse = () => {
  setIsCollapsed(true)
  document.cookie = `resizable-panels:collapsed=${JSON.stringify(
      true
  )}`
}
const handleResize = () => {
  setIsCollapsed(true)
  document.cookie = `resizable-panels:collapsed=${JSON.stringify(
      true
  )}`
}

</script>

<template>
<TooltipProvider :delayDuration=0>
  <ResizablePanelGroup direction="horizontal" :onLayout="handleLayout"
    class="h-full max-h-[800px] items-stretch">
    <ResizablePanel
        :defaultSize="defaultLayout[0] as number"
        :collapsedSize=navCollapsedSize
        :collapsible="true"
        :minSize="15"
        :maxSize="20"
        :onCollapse="handleCollapse"
        :onResize="handleResize"
        :class="cn(
            {
              'min-w-[50px] transition-all duration-300 ease-in-out': isCollapsed,
            }
          )"
    >
      <div
          :class="cn(
              'flex h-[52px] items-center justify-center',
              {
              'h-[52px]': isCollapsed,
              'px-2': !isCollapsed,
              }
          )"
      >
        <!-- todo: account switcher -->
      </div>
      <Separator />
      <Nav
          :isCollapsed="isCollapsed"
          :links="[{
            title: 'Inbox',
            label: '128',
            icon: Inbox,
            variant: 'default',
            },
           {
              title: 'Drafts',
              label: '9',
              icon: File,
              variant: 'ghost',
           },
           {
                title: 'Sent',
      label: '',
      icon: Send,
      variant: 'ghost',
      },
      {
      title: 'Junk',
      label: '23',
      icon: ArchiveX,
      variant: 'ghost',
      },
      {
      title: 'Trash',
      label: '',
      icon: Trash2,
      variant: 'ghost',
      },
      {
      title: 'Archive',
      label: '',
      icon: Archive,
      variant: 'ghost',
      }

          ]"
      />
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel :defaultSize="defaultLayout[1] as number" :minSize="30">
      <Tabs defaultValue="all">
        <div class="flex items-center px-4 py-2">
          <h1 class="text-xl font-bold">Inbox</h1>
          <TabsList class="ml-auto">
            <TabsTrigger
                value="all"
                class="text-zinc-600 dark:text-zinc-200"
            >
              All mail
            </TabsTrigger>
            <TabsTrigger
                value="unread"
                class="text-zinc-600 dark:text-zinc-200"
            >
              Unread
            </TabsTrigger>
          </TabsList>
        </div>
        <Separator />
        <div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form>
            <div class="relative">
              <Search class="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" class="pl-8" />
            </div>
          </form>
        </div>
        <TabsContent value="all" class="m-0">
          <!-- todo: mail list -->
        </TabsContent>
        <TabsContent value="unread" class="m-0">
          <!-- todo: unread mail list -->
        </TabsContent>
      </Tabs>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel :defaultSize="defaultLayout[2] as number" :minSize=30>
     <!-- todo: mails details -->
    </ResizablePanel>
  </ResizablePanelGroup>
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
</TooltipProvider>
</template>

<style scoped>

</style>