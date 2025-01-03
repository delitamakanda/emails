<script setup lang="ts">
const props = defineProps({
  email: {
    type: Object,
    required: true
  }
})

const { email } = toRefs(props)
const toggleEmailDetails = ref(false)

const toggleEmailDetailsToggle = () => {
  toggleEmailDetails.value =!toggleEmailDetails.value
}


const deleteEmail = () => {
  // Call your backend API to delete the email
  console.log(`Deleting email: ${props.email.id}`)
}
</script>

<template>
<div>
  <p>{{ email.name }}</p>

  <button @click="toggleEmailDetailsToggle">Show Details</button>
  <button @click="deleteEmail">Delete Email</button>
  <div v-if="toggleEmailDetails">
    <div>{{email.message}}</div>
  </div>
</div>
</template>

<style scoped>

</style>