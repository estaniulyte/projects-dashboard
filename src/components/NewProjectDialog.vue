<template>
  <v-dialog
    v-model="show"
    max-width="650"
  >
    <v-card
    >
      <v-container class="pa-4 px-7">
        <h3 class="py-3">Add project</h3>
        <v-divider class="pb-3" />
        <v-form
          ref="form"
        >
          <TextInputField title="hello" />
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import TextInputField from "./form/TextInputField.vue"

export default {
  props: {
    value: Boolean
  },
  components: {
    TextInputField
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
  }
}
</script>