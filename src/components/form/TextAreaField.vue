<template>
  <div class="field">
    <div class="d-flex justify-space-between">
      <div class="caption d-flex align-end">{{ title }}<span v-if="required" class="red--text"> *</span></div>
      <div class=" pb-1 caption grey--text text--darken-1" v-if="additionalInfo">
       <v-btn
          v-for="button in buttons"
          :key="button.name"
          fab
          x-small
          height="25px"
          width="25px"
          elevation="0"
          text
          @click="button.action ? button.action() : () => {}"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                size="17px"
                color="primary"
                v-bind="attrs"
                v-on="on">
                {{ button.icon }}
              </v-icon>
            </template>
            <span> {{ button.tooltip }} </span>
          </v-tooltip>
        </v-btn>
      </div>
    </div>
    <v-textarea
      class="ma-0 pa-1 input px-0"
      v-model="item"
      :label="label"
      :placeholder="label"
      :required="required"
      :rules="rules"
      rows="3"
      hide-details
      single-line
      justify-sm
      rounded
      auto-grow
      clearable
    />
  </div>
</template>

<script>
export default {
  name: "TextAreaField",
  props: {
    title: String,
    label: String,
    additionalInfo: String,
    required: {
      type: Boolean,
      default: false
    },
    rules: [],
    value: null,
  },
  data: function () {
    return {
      buttons: [],
    }
  },
  computed: {
    item: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
  },
  methods: {
    set () {
      this.description = 'd'
    }
  }
}
</script>

<style lang="scss" scoped>

.input {
  background-color: rgba(231, 238, 233, 0.625);
  border-radius: 6px;
  font-size: small;
  line-height: 0.1rem!important;
}

::v-deep .v-input__slot {
  padding: 7px 15px!important;
}

::v-deep .v-label {
  font-size: small!important;
}

.field {
  width: 100%;
}

::v-deep .v-textarea textarea{
  line-height: 1rem!important;
}

::v-deep .v-field--error, ::v-deep .error--text {
  background-color: rgb(251, 192, 192);
}

</style>