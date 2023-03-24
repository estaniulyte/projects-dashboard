<script setup>
import NewProjectDialog from '../components/NewProjectDialog.vue'
</script>

<template>
  <div>
    <NewProjectDialog v-model="dialog" justify="center" />
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: true
  })
}
</script>