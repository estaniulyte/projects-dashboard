<template>
  <div class="field">
    <div class="caption">{{ title }}<span v-if="required" class="red--text"> *</span></div>
    <v-menu
      ref="menu1"
      v-model="menu1"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          class="ma-0 pa-1 input px-0"
          :required="required"
          :rules="rules"
          v-model="date"
          :label="label"
          persistent-hint
          prepend-icon="mdi-calendar"
          v-bind="attrs"
          v-on="on"
          hide-details
          single-line
          justify-sm
          rounded
          clearable
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        @input="menu1 = false"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "DateInputField",
  props: {
    title: String,
    label: String,
    required: {
      type: Boolean,
      default: false
    },
    rules: [],
    value: null,
  },
  data: function () {
    return {
      menu1: false,
      //date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    }
  },
  computed: {
    date: {
      get () {
        if (this.value)
          return this.value 
        else 
          return (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
      },
      set (value) {
        console.log("set")
        this.$emit('input', value)
      }
    },
  },
  
}
</script>

<style lang="scss" scoped>

.input {
  background-color: rgba(231, 238, 233, 0.625);
  border-radius: 6px;
  font-size: small;
}

::v-deep .v-input__slot {
  padding: 2px 15px!important;
}

::v-deep .v-label {
  font-size: small!important;
}

.field {
  width: 100%;
}

::v-deep .v-field--error, ::v-deep .error--text {
  background-color: rgb(251, 192, 192);
}

::v-deep .v-input__icon  {
  margin: 2px 0px 2px 20px;
  padding: 0px;
}
</style>