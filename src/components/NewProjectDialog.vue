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
          v-model="valid"
        >
          <TextInputField title="Project name" :required="true" :rules="titleRules" v-model="name" label="Ginger st. building"/>
          <div class="d-flex flex-row">
            <DateInputField class="my-2 mr-2" title="Start date" v-model="startDate" :required="true" :rules="dateRules" label="Pick start date" />
            <DateInputField class="my-2" title="End date" v-model="endDate" :required="true" :rules="dateRules" label="Pick end date" />
          </div>
          <TextAreaField title="Description" />
          <pre>
          </pre>
        </v-form>
        <v-divider class="pb-3" />
        <div class="d-flex flex-row">
          <v-btn
            class="text-caption text-decoration-underline text-none pa-0"
            text
            @click="resetForm()"
          >
            Clear all
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            class="px-6 py-5"
            color="primary lighten-1"
            elevation="0"
            small
          >
            Add project
          </v-btn>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import TextInputField from "./form/TextInputField.vue"
import DateInputField from "./form/DateInputField.vue"
import TextAreaField from "./form/TextAreaField.vue"

import { INITIAL_EVENTS, createEventId } from '../pages/event-utils'


export default {
  data: () => ({
    valid: false,
    titleRules: [
      v => v !== ' ' || 'Name is required',
      v => v !== null || 'Name is required',
      v => v !== '' || 'Name is required'
    ],
    dateRules: [
      v => v !== ' ' || 'Date is required',
      v => v !== null || 'Date is required',
      v => v !== '' || 'Date is required'
    ],
    name: null,
  }),
  props: {
    value: false,
    startDate: String,
    endDate: String
  },
  components: {
    TextInputField,
    DateInputField,
    TextAreaField
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