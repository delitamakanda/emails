<script setup lang="ts">
const emailsList = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    status: 'unread',
    message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timestamp: '2022-01-01 10:00:00',
    isStarred: false,
    isImportant: false,
    isRead: false,
    isSpam: false,
    isDeleted: false,
    isArchived: false,
    isDraft: false,
    isForwarded: false,
    isReplied: false,
    isTrashed: false,
    isFromMe: false,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    status:'read',
    message: 'Donec sed lectus vel felis consectetur, nec viverra neque semper.',
    timestamp: '2022-01-02 12:30:00',
    isStarred: true,
    isImportant: true,
    isRead: true,
    isSpam: false,
    isDeleted: false,
    isArchived: false,
    isDraft: false,
    isForwarded: false,
    isReplied: false,
    isTrashed: false,
    isFromMe: true,
  },
    {
    id: 3,
    name: 'Alice Johnson',
    email: 'alicejohnson@example.com',
    status: 'unread',
    message: 'Ut euismod arcu non justo ullamcorper, sed tincidunt erat consectetur.',
    timestamp: '2022-01-03 14:45:00',
    isStarred: false,
    isImportant: false,
    isRead: false,
    isSpam: false,
    isDeleted: false,
    isArchived: false,
    isDraft: false,
    isForwarded: false,
    isReplied: false,
    isTrashed: false,
    isFromMe: false,
  },
])
</script>

<template>
<div>
<EmailItem v-for="email in emailsList" :key="email.id" :email="email" />

</div>
</template>

<style scoped>

</style>