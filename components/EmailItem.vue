<script setup lang="ts">
import addDays from "date-fns/addDays"
import addHours from "date-fns/addHours"
import format from "date-fns/format"
import nextSaturday from "date-fns/nextSaturday"
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
} from "lucide-vue-next"
const props = defineProps({
  mail: {
    type: Object,
    required: true
  }
})

</script>

<template>

</template>

<style scoped>

</style>